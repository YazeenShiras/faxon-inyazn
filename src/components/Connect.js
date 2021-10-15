import React from "react";
import "./Connect.css";

const Connect = () => {
  const handleClick = () => {
    setTimeout(() => {
      document.getElementById("Subscribe").innerHTML = "Subscribed";
    }, 1000);
  };
  return (
    <div className="connect">
      <h1>Increase Your Engagement With Us</h1>
      <div className="button" id="Subscribe" onClick={handleClick}>
        Subscribe Now
      </div>
    </div>
  );
};

export default Connect;
