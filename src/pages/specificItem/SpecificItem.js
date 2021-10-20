import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Notification } from "react-rainbow-components";
import Header from "../../components/Header";
import { trendingsMen } from "../../util/data/TrendingMen";
import { trendingWomen } from "../../util/data/TrendingWomen";
import mensDatas from "../../util/data/mensCollection";
import womensDatas from "../../util/data/womensCollection";
import salesData from "../../util/data/newCollections";
import accessoriesMen from "../../util/data/accessoriesMen";
import accessoriesWomen from "../../util/data/accessoriesWomen";
import CartButtons from "../../components/CartButtons";
import "./SpecificItem.css";
import { NotificationContext } from "../../util/context/NotificationContext";

const SpecificItem = ({ match }) => {
  const [isNotified, setisNotified] = useContext(NotificationContext);

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

  let newSimilarItems = [...new Set(similarItems)];
  console.log(newSimilarItems);

  const position = newSimilarItems.findIndex((item, index) => {
    return imageUrl === item.image.src;
  });

  newSimilarItems.splice(position, 1);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [index]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isNotified === true) {
      document.getElementById("notificationBox").style.display = "block";
      setTimeout(() => {
        document.getElementById("notificationBox").style.display = "none";
        setisNotified(false);
      }, 3000);
    } else {
      document.getElementById("notificationBox").style.display = "none";
    }
  }, [isNotified, setisNotified]);

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
              <div
                id="notificationBox"
                style={{
                  zIndex: "10000",
                  position: "fixed",
                  right: "10px",
                  bottom: "10px",
                }}
              >
                <Notification
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#faf9f8",
                    borderColor: "#f0f0f0",
                    boxShadow: "0 5px 10px rgb(0, 0, 0, 0.1)",
                  }}
                  title={allData[index].title + "  Added to Cart"}
                  hideCloseButton="true"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="similarProducts" id="containerSimilarProduct">
          <div className="container__similarProduct">
            <div className="title__similarProduct">
              <h1>Similar Products </h1>
              <span className="count__title__similarProduct">
                {newSimilarItems.length}
              </span>
            </div>
            <div className="product__container__similarProduct">
              {newSimilarItems.map((similar) => {
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
