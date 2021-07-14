const mongoose = require("mongoose");

const PostModel = mongoose.Schema({
  title: { type: String, required: true },
  snippet:{type:String,required:true},
  imageUrl: { type: String, required: true },
  videoUrl: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  phase: { type: String, required: true },
  created: { type: Date, required: true },
});

module.exports = mongoose.model("post", PostModel);
