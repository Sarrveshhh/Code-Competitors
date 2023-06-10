import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import "./AllProblems.css"

const AllProblemsPage = () => {
  const [problems, setProblems] = useState([]);

  const init = async() => {
    const response = await axios.get('http://localhost:3001/problems/all').catch(function (error) {
      console.log(error);
    });

    
    console.log(response);

    const allP = response.data.allProblems;

    setProblems(allP);

    console.log(problems);

  } 

  useEffect(() => {init()}, []);
  return (
    <div id="allproblems">
      <table>
        <tbody>

          <tr>
            <th>Title</th>
            <th>Difficulty</th>
            <th>Acceptance</th>
          </tr>

          {problems.map((prob,index) => (
            <tr>
              <Link to={`/problems/:${prob.problemId}`}>
                <td>{prob.title}</td>
              </Link>
              <td className={`${prob.difficulty}`} >{prob.difficulty}</td>
              <td className={`${prob.difficulty}`} >{prob.acceptance}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default AllProblemsPage