import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartStateProvider } from "../src/util/context/CartContext";
import { OrderStateProvider } from "./util/context/OrderConatext";

ReactDOM.render(
  <React.StrictMode>
    <CartStateProvider>
      <OrderStateProvider>
        <App />
      </OrderStateProvider>
    </CartStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
