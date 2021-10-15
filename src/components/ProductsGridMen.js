import React from "react";
import "./ProductsGrid.css";
import mensDatas from "../util/data/mensCollection";
import accessoriesMen from "../util/data/accessoriesMen";
import { Link } from "react-router-dom";

const ProductsGridMen = () => {
  return (
    <div className="productsGrid">
      <h3>Clothes</h3>
      <div className="products__container">
        {mensDatas.map((data) => {
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
        {accessoriesMen.map((data) => {
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

export default ProductsGridMen;
