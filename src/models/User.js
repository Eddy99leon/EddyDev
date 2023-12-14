import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name:{
            type: String,
            unique: true,
            require: true,
        },
        email:{
            type: String,
            unique: true,
            require: true,
        },
        password:{
            type: String,
            require: true,
        },
    },
    {timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);