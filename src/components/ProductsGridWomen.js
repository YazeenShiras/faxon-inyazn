import React from "react";
import "./ProductsGrid.css";
import womensDatas from "../util/data/womensCollection";
import accessoriesWomen from "../util/data/accessoriesWomen";
import { Link } from "react-router-dom";

const ProductsGridWomen = () => {
  return (
    <div className="productsGrid">
      <h3>Clothes</h3>
      <div className="products__container">
        {womensDatas.map((data) => {
          return (
            <div className="product">
              <img src={data.image[0].src} alt={data.image[0].alt} />
              <div className="cart">
                <h5>
                  {data.marketingMarkerText
                    ? data.marketingMarkerText
                    : "Faxon"}
                </h5>
              </div>
              <h4>{data.title}</h4>
              <h4>{data.price}</h4>
              <div className="color">
                {data.swatches.map((swatch) => {
                  return (
                    <div style={{ backgroundColor: swatch.colorCode }}></div>
                  );
                })}
              </div>
              <Link
                className="productShopLink"
                to={`/catalog/${data.articleCode}`}
              >
                Shop Now
              </Link>
            </div>
          );
        })}
      </div>
      <h3 className="accessories">Accessories</h3>
      <div className="products__container">
        {accessoriesWomen.map((data) => {
          return (
            <div className="product">
              <img src={data.image[0].src} alt={data.image[0].alt} />
              <div className="cart">
                <h5>
                  {data.marketingMarkerText
                    ? data.marketingMarkerText
                    : "Faxon"}
                </h5>
              </div>
              <h4>{data.title}</h4>
              <h4>{data.price}</h4>
              <div className="color">
                {data.swatches.map((swatch) => {
                  return (
                    <div style={{ backgroundColor: swatch.colorCode }}></div>
                  );
                })}
              </div>
              <Link
                className="productShopLink"
                to={`/catalog/${data.articleCode}`}
              >
                Shop Now
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsGridWomen;
