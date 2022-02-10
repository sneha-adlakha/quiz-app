import React from "react";
import "../App.css";
import Card from "./Card";
import Timer from "./Timer";
export const Left = () => {
  return (
    <>
      <div className="top">
        <div className="timer-clock"><Timer/></div>
      </div>
      <div className="bottom">
      <Card/>  
      </div>
    </>
  );
};
export default Left;
