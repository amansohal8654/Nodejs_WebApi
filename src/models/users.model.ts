import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserInput {
    name: string;
    email: string;
    password: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<Boolean>;
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

userSchema.pre("save", async function(next){
    let user = this as UserDocument;
    console.log(user);
    if(!user.isModified){
        next();
    }

    const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

    const hashPassword = await bcrypt.hashSync(user.password, salt);
    user.password = hashPassword;

    return next();
})

userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
    let user = this as UserDocument;
    
    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
}

const UserModel = mongoose.model("User", userSchema);

export default UserModel;