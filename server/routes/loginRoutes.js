import express from "express";
import jwt from "jsonwebtoken";
import user from "../models/user.js";
const router = express.Router();
import dotenv from "dotenv";

dotenv.config();

router.post("/", async (req, res) => {
    const {email, password} = req.body;

    if(!(email && password)){
        return res.status(400).json({msg: "All inputs are requrired!"});
    }

    const loginUser = await user.findOne({ email });
    if(!loginUser){
        return res.status(400).json({msg: "No account found!"});
    }

    if(loginUser.password !== password){
        return res.status(403).json({msg: "Incorrect password!"});
    }


    const token = jwt.sign({email: loginUser.email}, process.env.ACCESS_TOKEN_SECRET);


    return res.status(200).json({token});
    
});


export default router;
