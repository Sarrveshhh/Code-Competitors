import React , { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import "./ProblemsPage.css"
import axios from 'axios';


const ProblemsPage = () => {
  const [selectedProb, setSelectedProb] = useState([]);
  const [CodeSeg, setCodeSeg] = useState("") ;
  const { pid } = useParams() ;
  const cleanId = pid.substring(1) ;

  console.log(cleanId) ;

  // const found = problems.find((prob)=>{
  //   return prob.problemId===cleanId;
  // })

  useEffect(() => {init();}, []);

  const init = async() => {
    const response = await axios.get(`http://localhost:3001/problems/eachProblem/` + cleanId).catch(function (error) {
      console.log(error);
    });

    const selectP = response.data.selectedProblem;
    setSelectedProb(selectP[0])
  }

  // const handleKey = (event) => {
  //   if (event.key == "Tab"){
  //     event.preventDefault() ;
  //     const { selectionStart , selectionEnd , value } = event.target ;
  //     const val = value.substring(0,selectionStart) + "\t" + value.substring(selectionStart) ;
  //     event.target.value = val;
  //     event.target.selectionStart = event.target.selectionEnd = selectionStart+1;
  //   }
  //   setCodeSeg(event.value) ;
  // }

  return (
    <div>

      {
        selectedProb? (
          <div id="problempage" className='flex-row'>
            <div className="ques">
              <h1>{selectedProb.title}</h1>
              <h5>Description</h5>
              <p>{selectedProb.description}</p>
              <code>Input : {selectedProb.exampleIn}</code>
              <code>Output : {selectedProb.exampleOut}</code>
            </div>
            <div className="code">
              <h1>Code Here</h1>
              <form className='code-form' method="post" action='/runprogram' >
                <textarea name="SolvedCode" onKeyDown={ (event) => handleKey(event) }></textarea>
                <button type="submit" id="test">TestCode</button>
                <button type="submit" id="submit">SubmitCode</button>
              </form>
            </div>
          </div>
        ) :
        (<div>The searched Question Doesn't exist</div>)
      }

    </div>
    
  )
}

export default ProblemsPage