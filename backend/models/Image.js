import mongoose from "mongoose";

const ImageSchema=new mongoose.Schema({
    imageId:{type: String, required: true, unique: true},
    imageName:{type: String},
    imageUrl:{type: String, required: true},
    imageDescription:{type: String},
    userId:{type: String, ref: 'User'}
});

export default mongoose.model('Image', ImageSchema);