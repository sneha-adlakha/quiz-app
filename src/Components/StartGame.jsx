import React,{useRef} from 'react'
import {useQuiz} from "../QuizContext/quizContext";
function StartGame() {
    const inputref=useRef();
    const {dispatch}=useQuiz();
   const handleClick=()=>
    {
      const name=inputref.current.value
      name && dispatch({type:"SETUSER",payload:name}) 
    }
  return (
    <div className='start'>
    <input type="text" placeholder="Enter Your Name" className='userNameInput' ref={inputref} />
    <button className="startBtn" onClick={handleClick}>Start</button>
    </div>
  )
}

export default StartGame