import React from 'react';
import NavigationBar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer/Footer";
import Card from "./Components/Cards/Card";
import './App.css';
import {Provider} from 'react-redux'
import { store } from './redux/Store';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Items from "./Components/Items/Items";
import MyCart from "./Components/MyCart/MyCart";



function App() {
  return (
    <div className="app-container">
      <Provider store={store}>
        <NavigationBar />
         <Router>
        <Switch>
          <Route path={"/"} exact component={Items} />
          <Route path={"/cart"} component={MyCart} />
        </Switch>
        </Router>
        <div
          style={{
            marginTop: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        </div>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
