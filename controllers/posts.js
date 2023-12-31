const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const Comments = require("../models/comments")

exports.getProfile = async (req, res) => {
    const user = req.user.username;
    try{
        const post = await Post.find({user: req.user.id})
        const comments = await Comments.find({post: req.params.id}).sort({createdAt: "desc"}).lean();
        res.render('profile.ejs', {posts: post, user: req.user, comments: comments})

    }catch(err){
        console.log(err)
    }

    // res.render('profile.ejs', {user : user})
}

exports.getPostPage = async (req, res) => {
    res.render('postpage.ejs')
}

exports.createPost = async (req, res) => {
    try{
        const result = await cloudinary.uploader.upload(req.file.path)
        await Post.create({
            image: result.secure_url,
            cloudinaryId: result.public_id,
            caption: req.body.caption,
            likes: 0,
            user: req.user.id
        })
        console.log("Post has been created!")
        res.redirect("/profile")
    }catch(err){
        console.log(err)
    }
}

exports.getFeed = async (req,res) => {
    try{
        const posts = await Post.find().sort({createdAt: "desc"}).lean();
        const comments = await Comments.find().sort({createdAt: "desc"});
        res.render("feed.ejs", {posts: posts, user: req.user, comments: comments});
    }catch(err) {
        console.log(err)
    }

}

exports.likePost = async (req,res) => {
    try{
        await Post.findOneAndUpdate(
            {_id: req.params.id},
            { $inc: {likes: 1}}
        )
        console.log("Likes +1")
        res.redirect('/post/feed')
    }catch(err){
        console.log(err)
    }
}

exports.deletePost = async (req, res) => {
    try{

    let post = await Post.findById(
        {_id: req.params.id}
    )
    
    await cloudinary.uploader.destroy(post.cloudinaryId)
    await Post.remove({_id: req.params.id})

    console.log("Deleted post");
    res.redirect('/profile')       
    }catch(err){
        console.log(err)
    }
}