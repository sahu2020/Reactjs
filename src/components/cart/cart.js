import { useSelector } from "react-redux";
import React, { useState,useEffect } from 'react';
import { Card } from "react-bootstrap";

export default function Cart() {
    const [cartItems, setcartItems] = useState([]);
    const userData = useSelector(state => state.userData);
    const inventory = useSelector(state => state.inventory);

    useEffect(() => {
        if(userData && inventory.length){
            const cartData = inventory.filter(item => userData.cart.includes(item.id));
            setcartItems(cartData)
        }
    }, [userData,inventory]);
    const cartCard = ({cartData}) => {

        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{cartData.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {cartData.name}
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        );

    };

    return (
        <div className="cart-container">
            {cartItems.map((item) => <cartCard key={item.id} cartData={item}></cartCard>)}
        </div>
    )
}