import express from "express";
const router = express.Router();
import problem from "../models/problem.js";
import submission from "../models/submission.js";
// import { problems, submissions } from "../index.js";
import { auth } from "../Middleware/auth.js";


//get all problems.
router.get("/all", async(req, res) => {
    try{
        const allProblems = await problem.find();
        res.status(200).json({allProblems});
    }
    catch(err){
        res.status(400).json({msg: "Some error occured!"});
        console.log(err);

    }
});

//add problems to the website.
router.post('/addProblem', async(req, res) => {
    const { problemId, title, difficulty, acceptance, description, exampleIn, exampleOut} = req.body;

    try{
        const createdProblem = await problem.create({problemId, title, difficulty, acceptance, description, exampleIn, exampleOut});
        res.status(200).json({createdProblem});
    }
    catch(error){
        res.status(400).json({msg: "Something went wrong!"});
        console.log(error);
    }
});


//get one problem complete description.
router.get("/eachProblem/:id", async(req, res) => {
    const problemId = req.params.id;

    try{
        const selectedProblem = await problem.find({problemId: problemId});

        res.status(200).json({selectedProblem});
    }
    catch(error){
        res.status(400).json({msg: "something went wrong!"});
        console.log(error);
    }

});


//submit solution.
router.post("/submission", auth, async(req, res) => {

    const isCorrect = Math.random() < 0.5;
    const {problemId, solution, userId} = req.body;
    try{
        if(isCorrect){
            const status = 'AC';
            const submit = await submission.create({problemId, solution, userId, status});
            res.status(200).json({submit});
            console.log('submission added to db, with right answer');
        }
        else{
            const status = 'WA';
            const submit = await submission.create({problemId, solution, userId, status});
            res.status(200).json({submit});
            console.log('submission added to db, with wrong answer');
        }
    }
    catch(errror){
        res.status(400).json({msg: 'Something went wrong!'});
        console.log(error);
    }   
    // const isCorrect = Math.random() < 0.5;
    // const problemId = req.body.problemId;
    // const solution = req.body.solution;
    // const userId = "Sarrvesh";

    // if(isCorrect){
    //     res.status(200).json({"message":"Correct Solution!"});
    //     const status = "AC";
    //     submissions.push({problemId, isCorrect, solution, userId, status});
    // }
    // else{
    //     res.status(200).json({"message":"Wrong Answer"});
    //     const status = "WA";
    //     submissions.push({problemId, isCorrect, solution, userId, status});
    // }

    // console.log(submissions);

});




router.get("/submission/:id", auth, (req, res) => {
    const problemId = Number(req.params.id); // Convert id to a number
  
    const filteredSubmission = submissions.filter(
      (x) => x.problemId === problemId
    );
  
    res.status(200).json({ submissions: filteredSubmission });
  });





export default router;