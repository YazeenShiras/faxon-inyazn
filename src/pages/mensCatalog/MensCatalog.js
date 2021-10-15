import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductsGridMen from "../../components/ProductsGridMen";
import "./MensCatalog.css";

const MensCatalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mensCatalog">
      <Header />
      <div
        className="display"
        style={{
          backgroundImage: `url("https://lp2.hm.com/hmgoepprod?set=width[1280],quality[80],options[limit]&source=url[https://www2.hm.com/content/dam/men_s04/augusti-2021/3053h/3053h-the-relaxed-jeans-3x2-CPD.jpg]&scale=width[global.width],height[15000],options[global.options]&sink=format[jpg],quality[global.quality]")`,
          backgroundSize: "cover",
        }}
      >
        <h1>Men's Clothing</h1>
        <h3>
          Check out all the freshest styles your closet needs in our men's
          clothing range. You'll find a roundup of everyday essentials,
          including tops and T-Shirts, as well as comfy lounge sets and
          underwear. Formal event coming up? Scroll no further than our men's
          blazers and suits for the sharpest looks and nail the dress code. When
          it comes to men's pants, there's chinos, joggers and cargo styles in
          all the staple colors.
        </h3>
      </div>
      <Link to="/shop" className="button">
        SHOP NOW
      </Link>
      <h1 className="titleOfProducts">Our Products</h1>
      <ProductsGridMen />
      <Footer />
    </div>
  );
};

export default MensCatalog;
