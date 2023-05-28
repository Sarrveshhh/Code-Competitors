import express from "express";
const router = express.Router();
import { problems, submissions } from "../index.js";


//get all problems.
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


//get one problem complete description.
router.post("/eachProblem/:id", (req, res) => {
    const problemId = req.params.id;

    const filteredProblem = problems.filter(x => x.problemId === problemId);

    if(filteredProblem.length == 0){
        
        res.status(404).json({error:"Problem not found!"});
    }
    else{
        res.status(200).json(filteredProblem);
    }
});


//submit solution.
router.post("/submission", (req, res) => {
    const isCorrect = Math.random() < 0.5;
    const problemIdd = req.body.problemIdd;
    const solution = req.body.solution;
    const userId = "Sarrvesh";

    if(isCorrect){
        res.status(200).json({"message":"Correct Solution!"});
        const status = "AC";
        submissions.push({problemIdd, isCorrect, solution, userId, status});
    }
    else{
        res.status(200).json({"message":"Wrong Answer"});
        const status = "WA";
        submissions.push({problemIdd, isCorrect, solution, userId, status});
    }

    console.log(submissions);

});



export default router;