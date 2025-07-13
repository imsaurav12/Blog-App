const express = require("express");
const router = express.Router();

//Import Controller
const { dummylink } = require("../controllers/likeController");
const {createComment} = require("../controllers/commentController");
const { createPost, getAllPosts} = require("../controllers/postController");



//Mapping Create
router.get("/dummylink", dummylink);
router.post("/comments/create",createComment);
router.post("/posts/create", createPost);
router.get("/posts", getAllPosts); 


//Export
module.exports = router;