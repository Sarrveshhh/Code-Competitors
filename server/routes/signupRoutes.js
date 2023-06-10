import express from "express";
import user from "../models/user.js";
const router = express.Router();
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
const secret = 'test';


router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
      // Check if the email already exists in the database
      const existingUser = await user.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      // Hash the password
      //const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user document
      const newUser = new user({
        name,
        email,
        password
      });
  
      // Save the user document to the database
      await newUser.save();
  
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  

});

export default router;