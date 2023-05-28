import express from "express";
const router = express.Router();
import { problems } from "../index.js";

router.get("/all", (req, res) => {
    const filteredProblem = problems.map(x => ({
        problemId: x.problemId,
        difficulty: x.difficulty,
        acceptance: x.acceptance

    }))
    res.status(200).json({
        problems: filteredProblem
    });
    
});




export default router;