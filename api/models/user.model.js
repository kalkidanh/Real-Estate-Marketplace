import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://miro.medium.com/v2/resize:fit:315/1*E1LonYGC5Fx4QLY4W5SaVA.jpeg"
    },
}, 
{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;