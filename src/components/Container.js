import React from "react";
import { Link } from "react-router-dom";
import "./Container.css";
import { trendingsMen } from "../util/data/TrendingMen";
import { trendingWomen } from "../util/data/TrendingWomen";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img01 from "../assets/IMG01.jpeg";
import img02 from "../assets/IMG02.jpeg";

const Container = () => {
  const trendingsData = trendingsMen.concat(trendingWomen);

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

  shuffle(trendingsData);

  return (
    <div className="container">
      <div className="trending__container">
        <div className="title__trending">
          <h2>Trending Now</h2>
        </div>
        <div className="products__trending">
          {trendingsData.map((data) => {
            return (
              <div className="productCard__trending" key={data.articleCode}>
                <div className="left">
                  <img src={data.image[0].src} alt={data.image[0].alt} />
                </div>
                <div className="right">
                  <h2>{data.title}</h2>
                  <h3>{data.price}</h3>
                  <Link className="button" to={`/catalog/${data.articleCode}`}>
                    <div>Shop Now</div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="catalogs__conatainer">
        <div
          className="men__catalog"
          style={{
            backgroundImage: `url(${img01})`,
            backgroundSize: "cover",
          }}
        >
          <h1>Men's Clothing</h1>
          <h3>
            We have the letest and most complete catalog of clothes for Men.
          </h3>
          <Link className="link" to="/catalog/mens-catalog">
            <h4>View Catalog</h4>
            <FontAwesomeIcon
              className="arrowRightCatalog"
              icon={faArrowRight}
            />
          </Link>
        </div>
        <div
          className="women__catalog"
          style={{
            backgroundImage: `url(${img02})`,
            backgroundSize: "cover",
          }}
        >
          <h1>Women's Clothing</h1>
          <h3>
            We have the letest and most complete catalog of clothes for Women.
          </h3>
          <Link className="link" to="/catalog/womens-catalog">
            <h4>View Catalog</h4>
            <FontAwesomeIcon
              className="arrowRightCatalog"
              icon={faArrowRight}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Container;
