import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post'}],
    profileImage: { type: Schema.Types.ObjectId, ref: 'ProfileImage'}
})

const User = mongoose.model('User', userSchema)

export { User } 

