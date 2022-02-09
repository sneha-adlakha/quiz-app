import React from "react";
import "../App.css";
import Card from "./Card";
export const Left = () => {
  return (
    <>
      <div className="top">
        <div className="timer-clock">30</div>
      </div>
      <div className="bottom">
      <Card/>  
      </div>
    </>
  );
};
export default Left;
