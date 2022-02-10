import React, { useEffect,useState } from 'react'
import {useQuiz} from "../QuizContext/quizContext";
function Timer() {
    const {state:{questionNo},dispatch}=useQuiz();
    const [timer,setTimer]=useState(30);
    useEffect(()=>{
        if(timer===0) return dispatch({type:"TIMEOUT"})
        const interval=setInterval(()=>{
            setTimer((prev)=>prev-1);
        },1000);
        return()=>clearInterval(interval);
    },[timer,dispatch]);
    useEffect(()=>{
        setTimer(30);
    },[questionNo]);
  return timer;
}

export default Timer