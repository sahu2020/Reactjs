import React , {useEffect}from "react";
import { useSelector,useDispatch } from "react-redux";
import { auth, userProfileData ,inventoryDataFetch,signInWithGoogle } from "../../firebase/firebase.utils";

import {InputGroup,
        FormControl,
        Dropdown,
        ButtonGroup,
        Button,
        OverlayTrigger,
        Tooltip} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import './Navbar.css';
import { loginChange,storeData ,Category} from "../../redux/Actions";
// import {Link} from 'react-router-dom';
/*
* Brand ----- [Search...] ----- Dropdown About-US My Cart
* */

export default function NavigationBar(){
    const userData = useSelector(state => state.userData);
    const inventoryData = useSelector(state => state.inventoryData);
     const dispatch = useDispatch();
    
   useEffect(function(){
        const subscribeToAuth = auth.onAuthStateChanged( async user => {
            const userRef = await userProfileData(user);
            if(!userRef) dispatch(loginChange(null, null));
            else{
                userRef.onSnapshot(snapShot => {
                    console.log('loginChange entered',snapShot.data())
                    dispatch(loginChange(snapShot.data(), userRef));
                });
            }
        });
        return function(){
            subscribeToAuth();
        }
    }, []);


  useEffect(function(){

           const inventoryRef = inventoryDataFetch();
    inventoryRef.onSnapshot((snapshot)=>{
      const inventoryData = snapshot.docs.map((item) => {
        const data = item.data();
        const id = item.id;
        return {
          id,
          ...data,
        };
      });
      console.log(inventoryData);
      dispatch(storeData(inventoryData))
    });

    }, []);

 const UserDisplay = () => {
        if(userData){
            return (
              <>
                  <span className='navbar-name'>
                      Hello,{userData.displayName.split(' ')[0]}
                  </span>
                  {/* <OverlayTrigger placement='bottom' overlay={
                  <Tooltip id='my-cart-tooltip'>
                      My Cart
                  </Tooltip>
                    }>
                    faShoppingCart
                  </OverlayTrigger> */}
                  <Button variant="success" bsPrefix='custom-dropdown' onClick={ () => auth.signOut() }> Sign Out </Button>
              </>
            );
        }
        return (
            <Button variant="success" bsPrefix='custom-dropdown' onClick={ signInWithGoogle }> Sign In </Button>
        );
    };

    

    
    return(
        <div className='nav-wrapper'>
           ECart
            <InputGroup className="w-25">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch}/>
                </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
                placeholder="Enter something to search..."
                aria-label="Search"
                aria-describedby="basic-addon1"
            />
            </InputGroup>

            <div className='nav-item'>
            <Dropdown as={ButtonGroup}>
                    <Button variant="success" bsPrefix='custom-dropdown'>Choose Category</Button>

                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" className='custom-dropdown'/>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => dispatch(Category('all'))}> All </Dropdown.Item>
                        <Dropdown.Item onClick={() => dispatch(Category('pantry'))}> Pantry </Dropdown.Item>
                        <Dropdown.Item onClick={() => dispatch(Category('clothing'))}> Clothing </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <a href='#' className='nav-link'> About Us </a>
                <UserDisplay/>

            </div>
        </div>
    );

}

