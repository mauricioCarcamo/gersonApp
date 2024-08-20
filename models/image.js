import mongoose, { Schema } from "mongoose";

const imageSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    path: { type: String, required: true },
    originalName: { type: String, required: true },
    idPost: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
});

const profileImageSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    path: { type: String, required: true },
    originalName: { type: String, required: true },
});

export const Image = mongoose.model('Image', imageSchema) 
export const ProfileImage = mongoose.model('ProfileImage', profileImageSchema) 

 

