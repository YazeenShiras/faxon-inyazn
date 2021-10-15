import React, { useContext, useState } from "react";
import { OrderContext } from "../util/context/OrderConatext";
import "../pages/specificItem/SpecificItem.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartButtons = ({
  code,
  name,
  price,
  imageSrc,
  imageAlt,
  dataAltImage,
  dataAltText,
}) => {
  // eslint-disable-next-line
  const [orders, setOrders] = useContext(OrderContext);
  const [value, setValue] = useState(1);

  const addtoCartButton = () => {
    setOrders((prevOrders) => [
      ...prevOrders,
      {
        code: code,
        name: name,
        price: price,
        imageSrc: imageSrc,
        imgageAlt: imageAlt,
        dataAltImage: dataAltImage,
        dataAltText: dataAltText,
        quantity: value,
      },
    ]);
  };

  const decreseValue = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const increaseValue = () => {
    setValue(value + 1);
  };

  return (
    <div className="buttons__container">
      <div
        className="button addtoCart"
        id="addToCart"
        onClick={addtoCartButton}
      >
        Add to cart
      </div>
      <div className="button">
        <div className="operators">
          <FontAwesomeIcon
            className="minusIcon"
            onClick={decreseValue}
            icon={faMinus}
          />
        </div>
        <div className="count">{value}</div>
        <div className="operators">
          <FontAwesomeIcon
            className="plusIcon"
            onClick={increaseValue}
            icon={faPlus}
          />
        </div>
      </div>
    </div>
  );
};

export default CartButtons;
