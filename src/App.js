import "./App.css";
import React from "react";
import Footer from "../src/components/footer/footer";
import NavigrationBar from './components/navbar/navbar';
import { Provider } from "react-redux";
import Cart from "./components/cart/cart";
import { store } from "./Redux/Store";
// import Items from "./Components/Items/Items";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  
  return (
    <div className="app-container">
      <Provider store={store}>
        <Router>
          <NavigrationBar />
          <Switch>
            {/* <Route path={"/"} exact component={Items} /> */}

            <Route path={"/cart"} exact component={Cart} />
          </Switch>
          <Footer></Footer>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
