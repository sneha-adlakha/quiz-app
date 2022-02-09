import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {QuizProvider} from "./QuizContext/quizContext";
 
ReactDOM.render(
  <React.StrictMode>
  <QuizProvider>
  <App />
  </QuizProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

