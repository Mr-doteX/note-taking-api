import { User } from "./models/user.js";
import { userValidator } from "./validators/validators.js";
import bcrypt from "bcrypt"

export const registerUser = async (req, res) =>{
    const {error, value} =userValidator.validate(req.body);
    if(error){
        return res.status(400).json({message: error.details[0].message});
    }
}

const existingUser = await User.findOne({email:value.email})
console.log("exixting", existingUser)

if (existingUser){
    res.status(409).json({message: "user registered!"})
}else{
    const hashedPassword = await bcrypt.hash(value.password, 12)
    const newUser = User.create(...valu, value.password=hashedPassword)

    res.status(201).json({
        message:"user created", data:newUser})
}

