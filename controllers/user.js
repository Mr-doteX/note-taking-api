import { sendEmail } from "../utils/mailing.js";
import { userModel } from "../models/user.js";
import { userValidator } from "../validators/validator.js";
import bcrypt from "bcrypt"

export const registerUser = async (req, res) => {
    const { error, value } = userValidator.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    const existingUser = await userModel.findOne({ email: value.email })
    console.log("exixting", existingUser)

    if (existingUser) {
        res.status(409).json({ message: "user exists!" })
    } else {
        const hashedPassword = await bcrypt.hash(value.password, 12);
        const newUser = userModel.create({
            userName: value.userName,
            email: value.email,
            password: hashedPassword
        });

        // await newUser.save();
        const htmlContent = `
    <h1> wlcome home</h1>
    <p>Hello ${newUser.userName}, how be</p>
    `;

        await sendEmail(newUser.email, "take me serious!", htmlContent);

        res.status(201).json({
            message: "user created", data: newUser
        })

    }
}