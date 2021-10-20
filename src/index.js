import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartStateProvider } from "../src/util/context/CartContext";
import { OrderStateProvider } from "./util/context/OrderConatext";
import { NotificationStateProvider } from "./util/context/NotificationContext";
import { SearchStateProvider } from "./util/context/SearchContext";

ReactDOM.render(
  <React.StrictMode>
    <CartStateProvider>
      <OrderStateProvider>
        <SearchStateProvider>
          <NotificationStateProvider>
            <App />
          </NotificationStateProvider>
        </SearchStateProvider>
      </OrderStateProvider>
    </CartStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
