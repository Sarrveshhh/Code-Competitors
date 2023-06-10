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
        return res.status(400).json({msg: "No account found!"})
    }

    return res.status(200).json({msg: "Complete validation!"})
});


export default router;
