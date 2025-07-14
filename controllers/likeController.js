const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req,res) => {
    try{
        // frontend se kon user like kiya kis post pr fetch kro req body se
        const {user,post} = req.body;

        // Like ka new object banaye
        const like = new Like({post,user}); 

        //like ko save kr lo db me
        const savedLike = await like.save();
 
        //update the post collection on the basis on this
        const updatedPost = await Post.findByIdAndUpdate(post, {$push : {likes: savedLike._id} }, {new: true})
                            .populate("likes")
                            .exec();

        res.json({
                post: updatedPost,
            });
        }
        catch(error){
            return res.status(400).json({
                error: "Error while Liking post",
            });
        }
    }

    // Unlike the Post
    exports.unlikePost = async (req,res) => {
        try{
            const{ post, like} = req.body;

            //find and delete the like collection me se
            const deletedLike = await Like.findOneAndDelete({post: post, _id: like});

            if (!deletedLike) {
                return res.status(404).json({ error: "Like not found for this post" });
            }

            //update th post collection
            const updatedPost = await Post.findByIdAndUpdate(post, 
                                                            {$pull: {likes: deletedLike._id } },
                                                            {new: true});

            res.json({
                message:"Unliked Successfully",
                post: updatedPost,
            }); 

        }

        catch(error){
            return res.status(400).json({
                error: "Error while unliking post",
            });
        }
    }