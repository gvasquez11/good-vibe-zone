const Comment = require("../models/comments");

exports.createComment = async (req, res) => {
    try{
        await Comment.create({
            comment: req.body.comment,
            postID : req.params.id,
            likes: 0,
            madeBy: req.user.id
        })
        
        console.log("Comment has been created!")
        res.redirect("/post/feed")
    }catch(err) {
        console.log(err)
    }
}