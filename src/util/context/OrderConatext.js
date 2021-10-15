import React, { useState, createContext } from "react";

export const OrderContext = createContext();

export const OrderStateProvider = (props) => {
  // eslint-disable-next-line
  const [orders, setOrders] = useState([]);

  return (
    <OrderContext.Provider value={[orders, setOrders]}>
      {props.children}
    </OrderContext.Provider>
  );
};
