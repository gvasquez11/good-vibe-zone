const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");

exports.getProfile = (req, res) => {
    const user = req.user.username;

    res.render('profile.ejs', {user : user})
}

exports.getPostPage = (req, res) => {
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
            user : req.body.user,
        })
        console.log("Post has been created!")
        res.redirect("/profile")
    }catch(err){
        console.log(err)
    }
}