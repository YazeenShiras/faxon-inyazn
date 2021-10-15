import React, { useEffect, useContext, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import { OrderContext } from "../../util/context/OrderConatext";
import { CartContext } from "../../util/context/CartContext";
import Select from "react-select";
import countryList from "react-select-country-list";
import Header from "../../components/Header";
import "./Cart.css";
import GooglePayButton from "@google-pay/button-react";

const Cart = () => {
  const [orders, setOrders] = useContext(OrderContext);
  // eslint-disable-next-line
  const [count, setCount] = useContext(CartContext);

  useEffect(() => {
    if (count === 0) {
      document.getElementById("cartOrderForm").style.display = "none";
      document.getElementById("orderdetails").style.width = "100%";
      document.getElementById("cartOrderTitle").innerHTML = "Cart is Empty !";
      document.getElementById("warning").style.display = "block";
      document.getElementById("totalContainer").style.display = "none";
    }
    window.scrollTo(0, 0);
  }, [count]);

  let itemPrice;
  let totalPrice = 0;
  for (let i = 0; i < orders.length; i++) {
    const price = orders[i].price.split(/Rs./);
    price.splice(0, 1);
    price[0] = price[0].replace(/,/, "");
    const priceNum = parseInt(price[0]);
    itemPrice = priceNum * orders[i].quantity;
    totalPrice += itemPrice;
  }

  let delivery = 50;
  let discount = (7 / 100) * totalPrice;
  let total = totalPrice - discount + delivery;

  const [country, setCountry] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const handleChange = (country) => {
    setCountry(country);
  };

  return (
    <div className="cartDetailsConatiner">
      <Header />
      <div className="orderDetailsContiner">
        <div className="orderDetails" id="orderdetails">
          <div className="orderDetails__orders">
            <div className="titleOrder">
              <h3 id="cartOrderTitle">Your Order</h3>
            </div>
            <div className="orderedProducts">
              {orders.map((order) => {
                return (
                  <div className="productOrder" key={order.code}>
                    <div className="left__productOrder">
                      <img src={order.imageSrc} alt={order.imageAlt} />
                    </div>
                    <div className="right__productOrder">
                      <FontAwesomeIcon
                        onClick={() => {
                          setOrders(
                            orders.filter((value) => value.code !== order.code)
                          );
                        }}
                        className="trashIcon"
                        icon={faTrashAlt}
                      />
                      <div className="top">
                        <h3>{order.name}</h3>
                      </div>
                      <div className="middle">
                        <h5>
                          Size <span>M</span>
                        </h5>
                      </div>
                      <div className="bottom">
                        <h3>
                          {order.price} <span>x</span>
                          <span>{order.quantity}</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="warning" id="warning">
                <h4>
                  Your shopping cart is empty. <br />
                  Explore our collections <br /> and get it now.
                </h4>
                <Link to="/shop" className="buttonShopNow">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="totalPriceOrder" id="totalContainer">
              <div className="top">
                <div className="topContent">
                  <h5>Delivery</h5>
                  <span className="subText">
                    Rs. {totalPrice ? delivery : "0.00"}
                  </span>
                </div>
                <div className="bottomContent">
                  <h5>Discount ({totalPrice ? 7 : 0}%)</h5>
                  <span className="subText">Rs. {discount.toFixed(2)}</span>
                </div>
              </div>
              <div className="bottom">
                <h2>Total</h2>
                <span>Rs. {totalPrice ? total.toFixed(2) : "0.00"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cartOrderForm" id="cartOrderForm">
          <div className="containerForm">
            <h3>Shipping Address</h3>
            <form action="">
              <div className="section">
                <div className="left subSection">
                  <h5>First Name*</h5>
                  <input className="inputBox" type="text" />
                </div>
                <div className="right subSection">
                  <h5>Last Name*</h5>
                  <input className="inputBox" type="text" />
                </div>
              </div>
              <div className="section">
                <div className="left subSection">
                  <h5>Address*</h5>
                  <input className="inputBox" type="text" />
                </div>
                <div className="right subSection">
                  <h5>Postal Code*</h5>
                  <input className="inputBox" type="text" />
                </div>
              </div>
              <div className="section">
                <div className="left subSection">
                  <h5>City*</h5>
                  <input className="inputBox" type="text" />
                </div>
                <div className="right subSection">
                  <h5>Country*</h5>
                  <Select
                    options={options}
                    value={country}
                    onChange={handleChange}
                    className="countryChange"
                  />
                </div>
              </div>
              <div className="section">
                <div className="left subSection">
                  <h5>Phone*</h5>
                  <input className="inputBox" type="text" />
                </div>
                <div className="right subSection">
                  <h5>Other Phone*</h5>
                  <input className="inputBox" type="text" />
                </div>
              </div>
              <div className="section buttonSection">
                <div className="left subSection">
                  <div className="buttonDeliver">Delever Here</div>
                </div>
                <div className="right subSection">
                  <div className="buttonCancel">Cancel</div>
                </div>
              </div>
            </form>
            <div className="buttonFooter">
              <GooglePayButton
                environment="TEST"
                paymentRequest={{
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [
                    {
                      type: "CARD",
                      parameters: {
                        allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                        allowedCardNetworks: ["MASTERCARD", "VISA"],
                      },
                      tokenizationSpecification: {
                        type: "PAYMENT_GATEWAY",
                        parameters: {
                          gateway: "example",
                          gatewayMerchantId: "exampleGatewayMerchantId",
                        },
                      },
                    },
                  ],
                  merchantInfo: {
                    merchantId: "BCR2DN6T47M37QI4",
                    merchantName: "Faxon",
                  },
                  transactionInfo: {
                    totalPriceStatus: "FINAL",
                    totalPriceLabel: "Total",
                    totalPrice: `${totalPrice ? total : "0"}`,
                    currencyCode: "INR",
                    countryCode: "IN",
                  },
                  shippingAddressRequired: true,
                  callbackIntents: [
                    "SHIPPING_ADDRESS",
                    "PAYMENT_AUTHORIZATION",
                  ],
                }}
                onLoadPaymentData={(paymentRequest) => {
                  console.log("success", paymentRequest);
                }}
                onPaymentAuthorized={(paymentData) => {
                  console.log("paymnet authorized success", paymentData);
                  return { transactionState: "SUCCESS" };
                }}
                onPaymentDataChanged={(paymentData) => {
                  console.log("paymnet data changed", paymentData);
                  return {};
                }}
                existingPaymentMethodRequired="false"
                buttonColor="black"
                buttonType="buy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
