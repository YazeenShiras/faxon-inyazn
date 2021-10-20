import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchContext } from "../../util/context/SearchContext";
import "./SearchResult.css";
import { trendingsMen } from "../../util/data/TrendingMen";
import { trendingWomen } from "../../util/data/TrendingWomen";
import mensDatas from "../../util/data/mensCollection";
import womensDatas from "../../util/data/womensCollection";
import salesData from "../../util/data/newCollections";
import accessoriesMen from "../../util/data/accessoriesMen";
import accessoriesWomen from "../../util/data/accessoriesWomen";

const SearchResult = () => {
  // eslint-disable-next-line
  const [inputVal, setInputVal] = useContext(SearchContext);

  let allProductData = trendingsMen.concat(
    trendingWomen,
    mensDatas,
    womensDatas,
    salesData,
    accessoriesMen,
    accessoriesWomen
  );

  const filterClick = (filter) => {
    setInputVal(filter);
  };

  let ResultedItems = [];

  for (let i = 0; i < allProductData.length; i++) {
    if (
      allProductData[i].title.toLowerCase().includes(inputVal.toLowerCase())
    ) {
      ResultedItems.push({
        id: allProductData[i].articleCode,
        title: allProductData[i].title,
        price: allProductData[i].price,
        category: allProductData[i].category,
        favorites: allProductData[1].favouritesTracking,
        marketingMarkerText: allProductData[i].marketingMarkerText,
        image: {
          src: allProductData[i].image[0].src,
          alt: allProductData[i].image[0].alt,
        },
      });
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let newResultedItems = [...new Set(ResultedItems)];
  console.log(newResultedItems);
  console.log(ResultedItems);

  useEffect(() => {
    if (inputVal === "" || newResultedItems.length === 0) {
      document.getElementById("resultItemsContainer").style.display = "none";
    } else {
      document.getElementById("resultItemsContainer").style.display = "block";
    }
    window.scrollTo(0, 0);
  }, [inputVal, newResultedItems]);

  useEffect(() => {
    document.getElementById("inputBox").addEventListener("keyup", (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        setInputVal(document.getElementById("inputBox").value);
      }
    });
  }, [setInputVal]);

  const handleClick = () => {
    setInputVal(document.getElementById("inputBox").value);
  };

  /* const handleChange = () => {
    setInputVal(document.getElementById("inputBox").value);
  }; */

  return (
    <div className="searchResult">
      <div className="headerContainerSearch" id="headerContainerSearch">
        <div className="header__leftSearch">
          <Link className="logoText" to="/">
            <h3>FAXON</h3>
          </Link>
        </div>
        <div className="header__rightSearch">
          <div className="searchBoxContainer" id="searchBoxContainer">
            <div className="searchBox">
              <input
                type="text"
                placeholder="Search"
                autoComplete="off"
                id="inputBox"
              />
              <FontAwesomeIcon
                className="searchIconSearch"
                icon={faSearch}
                onclick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="searchContainerContent">
        <div className="filtersContainer">
          <h3>
            <Link to="/catalog/mens-catalog" className="linkResults">
              Men
            </Link>
          </h3>
          <h3>
            <Link to="/catalog/womens-catalog" className="linkResults">
              Women
            </Link>
          </h3>
          <h3 onClick={() => filterClick("shirt")}>Shirts</h3>
          <h3 onClick={() => filterClick("hoodie")}>Hoodie</h3>
          <h3 onClick={() => filterClick("regular")}>Regular</h3>
          <h3 onClick={() => filterClick("top")}>Top</h3>
          <h3 onClick={() => filterClick("jean")}>Jeans</h3>
          <h3 onClick={() => filterClick("slim")}>Slim-fit</h3>
          <h3 onClick={() => filterClick("ring")}>Rings</h3>
        </div>
        <div className="resultCount">
          <h2>{inputVal ? `${newResultedItems.length} results` : ""}</h2>
        </div>
        <div className="resultItemsContainer" id="resultItemsContainer">
          {newResultedItems.map((resultedItem) => {
            console.log(resultedItem);
            return (
              <div className="resultItems">
                <div className="resultItemsImage">
                  <img
                    src={resultedItem.image.src}
                    alt={resultedItem.image.alt}
                  />
                </div>
                <div className="resultItemsTexts">
                  <h2>{resultedItem.title}</h2>
                  <h3>{resultedItem.price}</h3>
                  <div className="resultItemsButton">
                    <h5>
                      {resultedItem.marketingMarkerText
                        ? resultedItem.marketingMarkerText
                        : "Faxon"}
                    </h5>
                    <Link
                      className="buttonSearchResults"
                      to={`/catalog/${resultedItem.id}`}
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
