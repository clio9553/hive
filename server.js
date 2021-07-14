const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
// get .env file
require("dotenv").config();
// routes
const api = require("./server/routes/api");

const app = express();
// constants
const port = process.env.PORT || 8080;
const dbUrl = process.env.DB_URL;
const buildPath = path.join(__dirname, "hive-react/build");

// ** middleware **
app.use(morgan("dev"));
app.use(express.static(buildPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// routes
app.use("/api", api);
app.get("*", (_, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});
await mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((_) => {
    console.log("Mongo is live!!");
    // start server
    app.listen(port, async () => {
      console.log(`Server is running on ${port}`);

    });
  })
  .catch((err) => {
    console.log(err.message);
  });

