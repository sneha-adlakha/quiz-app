import React from 'react';
import {useQuiz} from "../QuizContext/quizContext";
import "../App.css"
const Right=()=> {
  const {state:{MoneyPyramid,questionNo}}=useQuiz();
  return (
      <ul className="moneyList">
      {MoneyPyramid.map((m)=>(
        <li key={m.id} className={questionNo===m.id?"moneyListItem active":"moneyListItem"}>
        <span className="moneyListItemNumber">{m.id}</span>
        <span className="moneyListItemAmount">{m.amount}</span>
        </li>
      ))} 
    </ul>
  )
}
export default Right