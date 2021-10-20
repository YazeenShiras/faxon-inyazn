import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Cart from "./pages//cart/Cart";
import SearchResult from "./pages/search/SearchResult";
import MensCatalog from "./pages/mensCatalog/MensCatalog";
import SpecificItem from "./pages/specificItem/SpecificItem";
import WomenCatalog from "./pages/womensCatalog/WomenCatalog";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" component={SearchResult} />
          <Route path="/shopping-cart" component={Cart} />
          <Route path="/catalog/mens-catalog" exact component={MensCatalog} />
          <Route
            path="/catalog/womens-catalog"
            exact
            component={WomenCatalog}
          />
          <Route path="/catalog/:id" exact component={SpecificItem} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
