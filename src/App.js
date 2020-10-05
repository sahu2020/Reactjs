import "./App.css";
import React from "react";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Footer from "../src/components/footer/footer";
import { Container, Row, Col } from "react-bootstrap";
import {
  signInWithGoogle,
} from "./firebase/firebase.utils";
import NavigrationBar from './components/navbar/navbar';
import { Provider } from "react-redux";
import { Route, Router } from "react-router-dom";
import MyCard from "./components/cards/cards";

function App() {

  
  return (
    <div className ='app-container'>
     <Provider store={store}>
      <Router>
    <NavigrationBar/>
    <Switch>
      <Route path={'/'} exact component={Items}/>

      
      <Route path={'/cart'} exact component={MyCart}/>
    </Switch>
    <Footer></Footer>
      </Router>
     </Provider>
   </div>
  );
}

export default App;
