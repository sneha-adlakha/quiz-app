import React,{createContext, useContext, useReducer} from "react";
import {Questionall} from "./Questions";
import {MoneyPyramid} from "./MoneyPyramid";
import {quizReducer} from "./quizReducer"
export const QuizContext =createContext();

export const QuizProvider=({children})=>{
    const [state,dispatch]=useReducer(quizReducer,initialState)
    return(
        <QuizContext.Provider value={{state,dispatch}}>
            {children}
        </QuizContext.Provider>
    )
}


export const initialState={
    username:null,
    Questionall,
    questionNo:1,
    timeout:false,
    MoneyPyramid:MoneyPyramid.reverse(),
    priceMoney:0,
}


export const useQuiz=()=>useContext(QuizContext)
