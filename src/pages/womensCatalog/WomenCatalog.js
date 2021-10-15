import React, { useEffect } from "react";
import "./WomenCatalog.css";
import Header from "../../components/Header";
import ProductsGridWomen from "../../components/ProductsGridWomen";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const WomenCatalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="womenCatalog">
      <Header />
      <div
        className="display"
        style={{
          backgroundImage: `url("https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/hm-magazine-2019/everyday-icon/OCES-EverydayIcon_TaraE_2.jpg]&scale=size[1200]&sink=format[jpeg],quality[80]")`,
          backgroundSize: "cover",
        }}
      >
        <h1>Women's Clothing</h1>
        <h3>
          Refresh your daily rotation with our women’s clothing range. With the
          freshest styles available all in one place, you can expect everyday
          basics, like women's tops and skirts, as well as must-have knitwear
          and cozy loungewear for downtime days. Plans to go out? Our women's
          dresses line up mini, midi and maxi styles that were made for summer
          evenings, while our stylish jeans and pants offer something to flatter
          every silhouette.
        </h3>
      </div>
      <Link to="/shop" className="button">
        SHOP NOW
      </Link>
      <h1>Our Products</h1>
      <ProductsGridWomen />
      <Footer />
    </div>
  );
};

export default WomenCatalog;
