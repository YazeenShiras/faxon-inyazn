import React from "react";
import { Link } from "react-router-dom";
import "./Outfit.css";
import salesData from "../util/data/newCollections";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Outfit = () => {
  const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  shuffle(salesData);

  return (
    <div className="outfit">
      <div className="title__outfit">
        <h1>
          Outfit Of The Day <br />
          Collections
        </h1>
        <Link to="/shop" className="button">
          See More
        </Link>
      </div>
      <div className="cards__outfit">
        {salesData.map((data) => {
          return (
            <div
              key={data.articleCode}
              className="card"
              style={{
                backgroundImage: `url(${data.image[0].src})`,
                backgroundSize: "cover",
              }}
            >
              <div className="text">
                <h3>{data.title}</h3>
                <h5>Explore Our Product And Get Dressed Up.</h5>
                <Link className="link" to={`/catalog/${data.articleCode}`}>
                  View Product
                  <FontAwesomeIcon className="arrowRight" icon={faArrowRight} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Outfit;
