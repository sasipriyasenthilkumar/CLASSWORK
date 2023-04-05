import React, { useState } from 'react'

export default function Day4() {

    const[input,setInput]=useState("");
    const[output,setOutput]=useState("");

    function handleChange(event)
    {
        setInput(event.target.value);
    }
    function handleClick()
    {
        setOutput(input);
        setInput("");
}


  return (
    <div className='day4'>
      <p>Enter the name:</p>
    <form>
    <br></br>
    <p>name : </p>
    <input type="text" placeholder='enter the name' onChange={handleChange} value={input} ></input>
    <p>select category : </p>
       <select name="fruit"  >
       <input  type='text' placeholder='fruits' ></input>
       <option value="fruits">orange🍊</option>
       <option value="fruits">apple🍎</option>
       <option value="fruits">banana🍌</option>
       <option value="fruits">berry🫐🍇</option>
       <option value="fruits">watermelon🍉</option>
       
       </select>
    
    </form>
    <br></br>
    <button id='button' onClick={handleClick} >SUBMIT</button>
    <h1>Hello {output}</h1>  
    </div>
  )
}