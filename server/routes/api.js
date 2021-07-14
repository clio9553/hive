const express = require("express");
const PostModel = require("../models/PostModel");
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

// ? Functions //
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
