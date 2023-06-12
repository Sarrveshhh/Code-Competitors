import React, { useState } from 'react'

import './AddProblems.css';

const AddProblems = () => {
    const [title, setTitle] = useState();
    const [difficulty, setDifficulty] = useState();
    const [acceptance, setAcceptance] = useState();
    const [description, setDescription] = useState();
    const [examplein, setexamplein] = useState();
    const [exampleout, setexampleout] = useState();


    const handleSubmit = async() => {
        const response = await axios.post("", {
            title: title,
            difficulty: difficulty,
            acceptance: acceptance,
            description: description,
            examplein: examplein,
            exampleout: exampleout
        }).catch(function(error){
            console.log(error);
        })


        console.log(response);
    };

  return (
    <div id="signup" className='flex-col'>
      <h1>Add Problems Here!</h1>
      <div className='addProblem-form'>
        <div className='subform'>
          <label htmlFor="name">Title: </label>
          <input onChange={(e) => {setTitle(e.target.value)}} type = "text" name='title' placeholder='Add title of the problem' required />
        </div>

        <div className='subform'>
          <label htmlFor="difficulty">Difficulty: </label>
          <input onChange={(e) => {setDifficulty(e.target.value)}} type="text" name='difficulty' placeholder='Add difficulty of the problem' required />
        </div>
        
        <div className='subform'>
          <label htmlFor="acceptance">Acceptance: </label>
          <input onChange={(e) => setAcceptance(e.target.value)} type="text" name='acceptance' placeholder='What is ther acceptance rate' />
        </div>

        <div className='subform'>
          <label htmlFor="description">Description: </label>
          <input onChange={(e) => setDescription(e.target.value)} type="text" name='description' placeholder='Discription of the problem' />
        </div>

        <div className='subform'>
          <label htmlFor="examplein">ExampleIn: </label>
          <input onChange={(e) => setexamplein(e.target.value)} type="text" name='examplein' placeholder='Example input' />
        </div>

        <div className='subform'>
          <label htmlFor="exampleout">ExampleOut: </label>
          <input onChange={(e) => setexampleout(e.target.value)} type="text" name='exampleout' placeholder='Example output' />
        </div>

        <div className='subbutton'>
        <button type="submit" id="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </ div>
  )
}

export default AddProblems