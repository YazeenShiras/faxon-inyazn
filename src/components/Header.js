import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  faBars,
  faSearch,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartContext } from "../util/context/CartContext";
import { OrderContext } from "../util/context/OrderConatext";
import "./Header.css";

const Header = () => {
  // eslint-disable-next-line
  const [count, setCount] = useContext(CartContext);
  // eslint-disable-next-line
  const [orders, setOrders] = useContext(OrderContext);

  setCount(orders.length);

  const changeToMenu = () => {
    document.getElementById("header").style.height = "260px";
    document.getElementById("close").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("menuItems").style.display = "block";
    document.getElementById("shoppingCart").style.display = "none";
    document.getElementById("searchBoxContainer").style.display = "none";
  };

  const changeToDefault = () => {
    document.getElementById("header").style.height = "60px";
    document.getElementById("close").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("menuItems").style.display = "none";
    document.getElementById("shoppingCart").style.display = "block";
    document.getElementById("searchBoxContainer").style.display = "block";
  };

  return (
    <div className="header" id="header">
      <div className="headerContainer">
        <div className="header__left">
          <Link className="logoText" to="/">
            <h3>FAXON</h3>
          </Link>
        </div>
        <div className="header__right">
          <div className="searchBoxContainer" id="searchBoxContainer">
            <Link to="/search" className="searchBox">
              <input
                type="text"
                id="searchInput"
                placeholder="Search"
                autoComplete="off"
              />
              <FontAwesomeIcon
                id="searchIcon"
                className="searchIcon"
                icon={faSearch}
              />
            </Link>
          </div>
          <div className="linkTexts">
            <nav>
              <ul>
                <Link to="/" className="linkNav">
                  HOME
                </Link>
                <Link to="/shop" className="linkNav">
                  SHOP
                </Link>
                <Link to="/catalog/mens-catalog" className="linkNav">
                  MEN
                </Link>
                <Link to="/catalog/womens-catalog" className="linkNav">
                  WOMEN
                </Link>
              </ul>
            </nav>
          </div>
          <Link
            id="shoppingCart"
            style={{ color: "#1c1f22", textDecoration: "none" }}
            to="/shopping-cart"
          >
            <div className="cart">
              <h4>
                <FontAwesomeIcon icon={faShoppingCart} />
              </h4>
              <span className="cart__count" id="cartCount">
                {count}
              </span>
            </div>
          </Link>
          <div className="menuDiv">
            <div className="menu" id="menu" onClick={changeToMenu}>
              <h4>
                <FontAwesomeIcon icon={faBars} />
              </h4>
            </div>
            <div
              className="menuIcon close"
              id="close"
              onClick={changeToDefault}
            >
              <h4>
                <FontAwesomeIcon icon={faTimes} />
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="menuItems" id="menuItems">
        <div className="links">
          <Link className="linkTo" to="/">
            HOME
          </Link>
          <Link className="linkTo" to="/shopping-cart">
            CART
          </Link>
          <Link className="linkTo" to="/shop">
            SHOP
          </Link>
          <Link className="linkTo" to="/catalog/mens-catalog">
            MEN
          </Link>
          <Link className="linkTo" to="/catalog/womens-catalog">
            WOMEN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
