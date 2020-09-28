import { auth } from 'firebase';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {
  signInWithGoogle,
  // auth,
  userProfileData,
  inventoryDataFetch,
} from "../../firebase/firebase.utils";
import {
  OverlayTrigger,
  Tooltip,
  FontAwesomeIcon,
  Button,
  InputGroup,
  FormControl,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import { LoginChange, StoreData, CategoryChange } from "../../Redux/Action";
import { Link } from "react-router-dom";

export default function NavigrationBar() {
  const userData = useSelector(state => state.userData);
  const dispatch = useDispatch();
 
      useEffect(function () {
        const subscribeToAuth = auth.onAuthStateChanged(async (user) => {
          const userRef = await userProfileData(user);
          if (!userRef) dispatch(LoginChange(null, null));
          else {
            userRef.onSnapshot((snapShot) => {
              dispatch(LoginChange(snapShot.data(), userRef));
            });
          }
        });
        return function () {
          subscribeToAuth();
        };
      }, []);


  useEffect(async () => {
    const inventoryRef = inventoryDataFetch();
    inventoryRef.onSnapshot((snapShot) => {
      const inventoryData = snapShot.docs.map((item) => {
        const data = item.data();
        const id = item.id;
        return {
          id,
          ...data,
        };
      });
      console.log(inventoryData);
      dispatch(StoreData(inventoryData));
    });
  }, []);

  const UserDisplay = () =>{
    if(userData){
      return (
        <>
          <span className="navbar-name">
            Hello,{userData.displayName.split(" ")[0]}
          </span>
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="my-cart-tooltip">My Cart</Tooltip>}
          >
            <Link to={"/cart"} className="nav-link">
              {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
            </Link>
          </OverlayTrigger>
          <Button
            variant="success"
            bsPrefix="custom-dropdown"
            onClick={() => auth.signOut()}
          >
            {" "}
            Sign Out{" "}
          </Button>
        </>
      );
      }
      return (
        <Button
          variant="success"
          bsPrefix="custom-dropdown"
          onClick={signInWithGoogle}
        >
          {" "}
          Sign In{" "}
        </Button>
      );
    };

  return (
    <div className="nav-wrapper">
      <Link to="/" className="nav-brand">
        <span> E-CART </span>
      </Link>
      <InputGroup className="w-25">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            {/* <FontAwesomeIcon icon={faSearch} /> */}
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Enter something to search..."
          aria-label="Search"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <div className="nav-item">
        <Dropdown as={ButtonGroup}>
          <Button variant="success" bsPrefix="custom-dropdown">
            Choose Category
          </Button>

          <Dropdown.Toggle
            split
            variant="success"
            id="dropdown-split-basic"
            className="custom-dropdown"
          />

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => dispatch(CategoryChange("all"))}>
              {" "}
              All{" "}
            </Dropdown.Item>
            <Dropdown.Item onClick={() => dispatch(CategoryChange("pantry"))}>
              {" "}
              Pantry{" "}
            </Dropdown.Item>
            <Dropdown.Item onClick={() => dispatch(CategoryChange("clothing"))}>
              {" "}
              Clothing{" "}
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <a href="#" className="nav-link">
          {" "}
          About Us{" "}
        </a>
        <UserDisplay />
      </div>
    </div>
  );
}


