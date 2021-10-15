import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SpecificItem.css";
import Header from "../../components/Header";
import { trendingsMen } from "../../util/data/TrendingMen";
import { trendingWomen } from "../../util/data/TrendingWomen";
import mensDatas from "../../util/data/mensCollection";
import womensDatas from "../../util/data/womensCollection";
import salesData from "../../util/data/newCollections";
import accessoriesMen from "../../util/data/accessoriesMen";
import accessoriesWomen from "../../util/data/accessoriesWomen";
import CartButtons from "../../components/CartButtons";

const SpecificItem = ({ match }) => {
  var allData = trendingsMen.concat(
    mensDatas,
    womensDatas,
    salesData,
    accessoriesMen,
    accessoriesWomen,
    trendingWomen
  );

  const index = allData.findIndex((value, index) => {
    return match.params.id === value.articleCode;
  });

  const value = allData[index].category;
  const imageUrl = allData[index].image[0].src;

  let values = value.split("_");

  let similarItems = [];

  for (let i = 0; i < allData.length; i++) {
    if (allData[i].category.includes(values[values.length - 1])) {
      if (allData[i].category.includes(values[values.length - 2])) {
        similarItems.push({
          id: allData[i].articleCode,
          title: allData[i].title,
          price: allData[i].price,
          category: allData[i].category,
          marketingMarkerText: allData[i].marketingMarkerText,
          image: {
            src: allData[i].image[0].src,
            alt: allData[i].image[0].alt,
          },
        });
      }
    }
  }

  const position = similarItems.findIndex((item, index) => {
    return imageUrl === item.image.src;
  });

  similarItems.splice(position, 1);

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);
  return (
    <div className="specificItem">
      <Header />
      <div className="container__specificItem">
        <div className="productDetails">
          <div className="productSection__productDetails">
            <div className="image__productSection">
              <img
                src={allData[index].image[0].src}
                alt={allData[index].image[0].alt}
              />
            </div>
            <div className="text__productSection">
              <div className="title__container__text">
                <h2 className="name">{allData[index].title}</h2>
              </div>
              <h3 className="price">{allData[index].price}</h3>
              <h5 className="markerText">
                {allData[index].marketingMarkerText
                  ? allData[index].marketingMarkerText
                  : "Faxon"}
              </h5>
              <div className="size__container">
                <h4>Size</h4>
                <div className="sizeGrid">
                  <div className="sizes">S</div>
                  <div className="sizes active">M</div>
                  <div className="sizes">L</div>
                  <div className="sizes">XL</div>
                  <div className="sizes">XXL</div>
                </div>
              </div>
              <CartButtons
                code={allData[index].articleCode}
                name={allData[index].title}
                price={allData[index].price}
                imageSrc={allData[index].image[0].src}
                imageSrc2={allData[index].image[0].dataAltImage}
                imageAlt={allData[index].image[0].alt}
                imageAlt2={allData[index].image[0].dataAltText}
              />
            </div>
          </div>
        </div>
        <div className="similarProducts" id="containerSimilarProduct">
          <div className="container__similarProduct">
            <div className="title__similarProduct">
              <h1>Similar Products </h1>
              <span className="count__title__similarProduct">
                {similarItems.length}
              </span>
            </div>
            <div className="product__container__similarProduct">
              {similarItems.map((similar) => {
                return (
                  <div className="similarProduct__Card" key={similar.id}>
                    <div className="leftSimilar">
                      <img
                        className="similarProduct__Card__image"
                        src={similar.image.src}
                        alt={similar.image.alt}
                      />
                    </div>
                    <div className="rightSimilar">
                      <h3>{similar.title}</h3>
                      <h4>{similar.price}</h4>
                      <h5>
                        {similar.marketingMarkerText
                          ? similar.marketingMarkerText
                          : "Faxon"}
                      </h5>
                      <Link
                        className="buttonSimilar"
                        to={`/catalog/${similar.id}`}
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificItem;
