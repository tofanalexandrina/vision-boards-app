import mongoose from 'mongoose';

const UserSchema=new mongoose.Schema({
    userId:{type: String, required: true, unique: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    userName:{type: String, required:true},
    userProfilePicture:{type: String}
});

export default mongoose.model('User', UserSchema);