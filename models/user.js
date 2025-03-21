import { model, Schema } from "mongoose";

const userSchema = new Schema({
    userName:{type:String, unique:true},
    email:{type:String, unique:true},
    password:{type:String}
});

export const userModel = model("User", userSchema)