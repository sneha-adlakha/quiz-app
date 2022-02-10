import React from 'react';
import {useQuiz} from "../QuizContext/quizContext";
import "../App.css"
const Right=()=> {
  const {state:{MoneyPyramid}}=useQuiz();
  return (
      <ul className="moneyList">
      {MoneyPyramid.map((m)=>(
        <li key={m.id} className="moneyListItem">
        <span className="moneyListItemNumber">{m.id}</span>
        <span className="moneyListItemAmount">{m.amount}</span>
        </li>
      ))} 
    </ul>
  )
}
export default Right