import "../App.css";
import React from 'react';
import {useQuiz} from "../QuizContext/quizContext";

export const Card=()=>
 {
  const {state}=useQuiz();
  console.log(state.Questionall);
  return (
    <div className="question-panel">
    <div className="question">What is Your name?</div>
    <div className="options">
      <div className="option-desc wrong">Sneha</div>
      <div className="option-desc">Sneha</div>
      <div className="option-desc">Sneha</div>
      <div className="option-desc">Sneha</div>
    </div>
    </div>
  )
}

export default Card