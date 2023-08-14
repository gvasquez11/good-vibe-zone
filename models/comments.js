const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({

    comment:{
        type: String,
        required: true
    },
    likes:{
        type: Number,
        required: true
    },
    postID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    },
    madeBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Comment", CommentSchema)