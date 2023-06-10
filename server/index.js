import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from 'cors';
const app = express()
const port = 3001;

import loginRoutes from './routes/loginRoutes.js';
import problemsRoutes from './routes/problemsRoutes.js';
import signupRoutes from './routes/signupRoutes.js';    

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use(express.json());
app.use(bodyParser.json({limit:"30 mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30 mb", extended: true}));
app.use(cors());


export const users = [];

export const submissions = [];


export const problems = [{
  problemId: "1",
  title: "201. Bitwise AND of Numbers Range",
  difficulty: "Medium",
  acceptance: "42%",
  description: "Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.",
  exampleIn: "left = 5, right = 7",
  exampleOut: "4"
},
{
  problemId: "2",
  title: "205. Add two numbers",
  difficulty: "Medium",
  acceptance: "41%",
  description: "Given two numbers, add them and return them in integer range. use MOD=1e9+7",
  exampleIn: "a = 100 , b = 200",
  exampleOut: "300"
},
{
  problemId: "3",
  title: "202. Happy Number",
  difficulty: "Easy",
  acceptance: "54.9%",
  description: "Write an algorithm to determine if a number n is happy.",
  exampleIn: "n = 19",
  exampleOut: "true"
},
{
  problemId: "4",
  title: "203. Remove Linked List Elements",
  difficulty: "Hard",
  acceptance: "42%",
  description: "Given number k , removed kth element",
  exampleIn: "list: 1->2->3 , k=2",
  exampleOut: "1->3"
}];


app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);
app.use('/problems', problemsRoutes);

mongoose.connect(process.env.CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology: true})
    .then(() => app.listen(port, () => console.log(`Server running on port: ${port}`)))
    .catch((error) => console.log(error.message));
