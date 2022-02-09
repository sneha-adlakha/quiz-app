import React,{createContext, useContext, useReducer} from "react";
import {Questionall} from "./Questions";
export const QuizContext =createContext();

export const QuizProvider=({children})=>{
    const [state,dispatch]=useReducer(quizReducer,initialState)
    return(
        <QuizContext.Provider value={{state,dispatch}}>
            {children}
        </QuizContext.Provider>
    )
}

export const quizReducer=(state,action)=>
{
switch(action.type){
    default: return state;
}
}
export const initialState={
    username:"sneha",
    Questionall,
    questionNo:1,
    timeout:false,
    amount:0,
}
export const useQuiz=()=>useContext(QuizContext)
