import React from "react";
import "./Display.css";
import bgimg from "../assets/FAXON__BG.jpeg";
import { Link } from "react-router-dom";

const Display = () => {
  return (
    <div
      className="display"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="center__text">
        <h1>
          Change your look with FAXON <br />
          Explore our Collections
        </h1>
        <Link className="button" to="/shop">
          <div>Shop Now</div>
        </Link>
      </div>
    </div>
  );
};

export default Display;
