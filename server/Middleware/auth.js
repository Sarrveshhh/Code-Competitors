import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const auth = (req, res, next) => {
    try{
        let authHeader = req.headers['authorization'];
        if(!authHeader){
            return res.status(403).json({msg:"Missing auth header"});
        }
        const decoded = jwt.verify(authHeader, process.env.ACCESS_TOKEN_SECRET);
        if(decoded && decoded.id){
            req.userId = decoded.id;
            next();
        }
    }
    catch{
        res.status(401).json({msg: "Unauthorized user!"});
    }
}