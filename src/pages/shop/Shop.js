import React, { useEffect } from "react";
import Header from "../../components/Header";
import "./Shop.css";
import ProductsGridMen from "../../components/ProductsGridMen";
import ProductsGridWomen from "../../components/ProductsGridWomen";
import Footer from "../../components/Footer";

const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="shop">
      <Header />
      <h1 className="titleOfProducts">All Products</h1>
      <h2>Men</h2>
      <ProductsGridMen />
      <h2>Women</h2>
      <ProductsGridWomen />
      <Footer />
    </div>
  );
};

export default Shop;
