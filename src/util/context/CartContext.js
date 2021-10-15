import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartStateProvider = (props) => {
  // eslint-disable-next-line
  const [count, setCount] = useState(0);

  return (
    <CartContext.Provider value={[count, setCount]}>
      {props.children}
    </CartContext.Provider>
  );
};
