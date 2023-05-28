import express from "express";
import jwt from "jsonwebtoken";
import { users } from "../index.js";
const router = express.Router();
import dotenv from "dotenv";

dotenv.config();

router.post("/", (req, res) => {
    const {name, email, password} = req.body;

    if(!(name && email && password)){
        return res.status(400).send("All inputs are requrired!");
    }

    const user = users.find(x => x.email === email);

    if(!user){
        return res.status(403).json({msg: "User not found!"});
    }

    if(user.password !== password){
        return res.status(403).json({msg: "Incorrect password"});
    }

    const payload = {id: user.id};
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
    res.json({accessToken: accessToken});



});


export default router;
