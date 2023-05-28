import express from "express";
import {users} from "../index.js"
const router = express.Router();
let userIdCounter = 0;


router.post("/register", (req, res) => {
    const {name, email,  password} = req.body;

    if(!(name && email && password)){
        return res.status(400).send("All inputs are requrired!");
    }

    
    if(users.find(x => x.email === email)){
        return res.status(403).json({msg: "Email already exist! Try login"});
    }

    users.push({name, email, password, id: userIdCounter++});

    res.status(200).json({msg: "successful"});


});

export default router;