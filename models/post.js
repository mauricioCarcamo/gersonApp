import mongoose, { Schema } from "mongoose";

const postSchema = new mongoose.Schema({
    body: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    dateMs: { type: Number, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}],
    reactions: [{ type: Schema.Types.ObjectId, ref: 'Reaction'}],
    images: [{ type: Schema.Types.ObjectId, ref: 'Image'}]
})

const commentSchema = new mongoose.Schema({
    body: { type: String, required: true },
    idPost: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    dateMs: { type: Number, required: true },
})

const reactionSchema = new mongoose.Schema({
    type: { type: Number, required: true },
    idPost: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
})

export const Post     = mongoose.model('Post', postSchema)
export const Comment  = mongoose.model('Comment', commentSchema)
export const Reaction = mongoose.model('Reaction', reactionSchema)



