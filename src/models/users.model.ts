import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface userDocument extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema({
    email: {type: "string", required: true, unique: true},
    name: {type: "string", required: true},
    password: {type: "string", required: true},
    },
    {
        timestamps: true,
    }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;