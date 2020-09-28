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

function App() {

  
  return (
   <NavigrationBar/>
  );
}

export default App;
