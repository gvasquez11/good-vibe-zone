const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");

exports.getProfile = async (req, res) => {
    const user = req.user.username;
    try{
        const post = await Post.find({user: req.user.id})
        res.render('profile.ejs', {posts: post, user: req.user})

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
