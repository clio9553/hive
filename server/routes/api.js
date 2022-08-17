const express = require("express");
const PostModel = require("../models/PostModel");
const UserModel = require("../models/UserModel")
const bcrypt = require("bcrypt")
const api = express.Router();

api.get("/posts", async (req, res) => {
  try {
    let posts = await queryPosts();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(401).json({
      message: error.message,
    });
  }
});

api.get("/posts/:id", async (req, res) => {
  try {
    let posts = await querySinglePost(req.params.id);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    res.status(401).json({
      message: error.message,
    });
  }
});

api.post("/create-post", async (req, res) => {
  // add post to db
  try {
    console.log('I am adding:' + req.body.title)
    await addPost(req.body);
    res.status(200);
  } catch (err) {
    console.log(err.message);
    res.status(401).json({
      message: err.message,
    });
  }
});

// authentication
api.post("/sign-up", async (req, res) => {
  const { username, password } = req.body;
  // add user to db
  try {
    UserModel.findOne({ username }, async function (err, userFound) {
      if (userFound === null) {
        // means user does not exist[This is a good thing ✅, means its a new user]
        const salt = await bcrypt.genSalt(12)
        const securePassword = await bcrypt.hash(password, salt);
        const newUser_ = new UserModel({
          username,
          password: securePassword
        })
        try {
          let user = await newUser_.save()
          console.log(`Adding username: ${user.username} with id: ${user._id}to DB`)

        } catch (error) {
          throw Error(error.message)
        }
      } else {
        // ❌ Means a user with that name already exists[This is bad, means we cant create user with this username]
        console.log(userFound)
        res.status(401).json({
          message: `Username is already in use!`
        })
        return;
      }
      res.status(200).json({ message: "Authentication successful!" })
    })
  } catch (error) {
    console.log(error.message);
    res.status(401).json({
      message: error.message
    })
  }


})

api.post("/login", (req, res) => {
  const { username, password } = req.body;
  // add user to db
  try {
    UserModel.findOne({ username }, async function (err, userFound) {
      if (userFound) {
        // ✅ User has been found
        const dbPassword = userFound.password;
        // 🔎 compare paswords
        await bcrypt.compare(password, dbPassword).then(isCorrect => {
          if (isCorrect) {
            // ✅ passwords match 
            res.status(200).json({ message: "Authentication successful!" })
          } else {
            // ❌ passwords dont match
            res.status(401).json({
              message: `Wrong password detected!`
            })
            return;
          }
        })
      } else {
        // ❌ Means a user does not exist 
        res.status(401).json({
          message: `User "${username}" does not exist!`
        })
        return;
      }
    })
  } catch (error) {
    console.log(error.message);
    res.status(401).json({
      message: error.message
    })
  }
})


async function queryPosts() {
  return await PostModel.find()
    .then((posts) => posts)
    .catch((err) => {
      throw Error(err.message);
    });
}
async function querySinglePost(id) {
  return await PostModel.findById(id)
    .then((post) => post)
    .catch((err) => {
      throw Error(err.message);
    });
}

async function addPost(data) {
  data["created"] = new Date();
  let post_ = new PostModel(data);
  try {
    // save post
    let post = await post_.save();
    console.log("Post saved with id:" + post.id);
  } catch (err) {
    throw Error(err.message);
  }
}

module.exports = api;
