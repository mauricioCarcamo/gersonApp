import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    body: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    dateMs: { type: Number, required: true }
})

export const Post = mongoose.model('Post', postSchema)

const commentSchema = new mongoose.Schema({
    body: { type: String, required: true },
    idPost: { type: String, required: true },
    author: { type: String, required: true },
    dateMs: { type: Number, required: true }
})

export const Comment = mongoose.model('Comment', commentSchema)

const reactionSchema = new mongoose.Schema({
    type: { type: String, required: true },
    idPost: { type: String, required: true },
    author: { type: String, required: true }
})

export const Reaction = mongoose.model('Reaction', reactionSchema)



