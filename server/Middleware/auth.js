import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const auth = (req, res, next) => {
        let authHeader = req.headers['authorization'];
        const bearerToken = authHeader.split(' ');
        const token = bearerToken[1];
        if(!authHeader){
            return res.status(403).json({msg:"Missing auth header"});
        }

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if(err){
                return res.status(401).json({msg: "error. Bad Token!"})
            }
            req.payload = payload;
            next();
        });
    }