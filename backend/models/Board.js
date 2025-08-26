import mongoose from "mongoose";

const BoardSchema=new mongoose.Schema({
    boardId:{type: String, required: true, unique: true},
    boardName:{type: String, required: true},
    boardDescription:{type: String},
    userId:{type: String, ref: 'User', required: true}
});

module.exports=mongoose.model('Board', BoardSchema);