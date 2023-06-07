import express from "express";
// import {users} from "../index.js"
import user from "../models/user.js";
const router = express.Router();
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
let userIdCounter = 0;
const secret = 'test';


router.post("/register", async (req, res) => {
    const {name, email,  password} = req.body; 

    if(!(name && email && password)){
        return res.status(400).send("All inputs are requrired!");
    }

    
    try{
        const oldUser = await user.findOne({email});

        if(oldUser){
            return res.status(400).json({msg: "User already exits"});
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await user.create({name, email, password: hashedPassword});
        const token = jwt.sign({ email: result.email,role: result.role, id: result._id }, secret, { expiresIn: "1h" });
        res.status(200).json({result, token});
    }
    catch{
        res.status(500).json({ message: 'Something went wrong' });
    }
    // if(users.find(x => x.email === email)){
    //     return res.status(403).json({msg: "Email already exist! Try login"});
    // }
    // users.push({name, email, password, id: userIdCounter++});
    // res.status(200).json({msg: "successful"});


});

export default router;