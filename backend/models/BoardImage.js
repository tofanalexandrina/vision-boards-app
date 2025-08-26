import mongoose from "mongoose";

const BoardImageSchema=new mongoose.Schema({
    boardImageId:{type: String, required: true, unique: true},
    boardId:{type: String, ref: 'Board', required: true},
    imageId:{type: String, ref: 'Image', required: true}
});

module.exports=mongoose.model('BoardImage', BoardImageSchema);