import "../App.css";
import React, {useState, useEffect } from 'react';
import {useQuiz} from "../QuizContext/quizContext";

export const Card=()=>
 {
  const {state:{Questionall,questionNo,priceMoney,userName},dispatch}=useQuiz();
  const [question,setQuestion]=useState(null);
  const [selectedAnswer,setSelectedAnswer]=useState(null);
  const [className,setClassName]=useState("option-desc")
  useEffect(()=>{
    setQuestion(Questionall[questionNo-1]);
  },[Questionall,questionNo]);
  const delay=(duration,callback)=>
  {
    setTimeout(()=>{
      callback();
    },duration);
  };
  function clickHandler(o,id)
  {
    setSelectedAnswer(o);
    setClassName("option-desc active");
    delay(3000,()=>{
      setClassName(o.isCorrect?"option-desc correct":"option-desc wrong")
    });
    delay(5000,()=>{
      if(o.isCorrect){
        delay(1000,()=>
        {
          dispatch({type:"CHANGEQUES",payload:id});
          setSelectedAnswer(null);
        });
      }
      else{
        dispatch({type:"TIMEOUT"})
      }
    });
  }
  console.log(priceMoney,userName);
  return (
    <div className="question-panel">
    <div className="question">{question?.question}</div>
    <div className="options">
      {question?.options.map((o)=>(
        <div
        className={selectedAnswer===o?className:"option-desc"}
        onClick={()=>!selectedAnswer && clickHandler(o,question.id)}>
        {o.value}
        </div>
      ))}
    </div>
    </div>
  )
}

export default Card