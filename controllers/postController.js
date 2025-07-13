//IMPORT MODEL
const Post = require("../models/postModel");

exports.createPost = async (req,res) => {
    try{

        //fetch title and body from request body
        const { title, body } = req.body;

        //create Post object
        const createPost = new Post({ title, body });

        //save the post to database
        const savedPost = await createPost.save();


        //return success response
        res.json({
            post: savedPost, 
        });
    }
    catch(error){
        return res.status(500). json({
            error: "Error while creating post",
        });

    }
}

exports.getAllPosts = async(req,res) => {
    try{
        const posts = await Post.find()
            .populate("likes")
            .populate("comments")
            .exec()

        res.json({ posts })
    }
    catch(err){
        return res.status(400).json({
            error: "Error while fetching"
        });
    }
}