import React from "react";
import './Card.css';
import {useSelector} from "react-redux";
import { Card, Button } from "react-bootstrap";
import {updateCartDetails} from "../../firebase/firebase.utils";

export default function MyCard({cardId,cardTitle,cardImage,cardDiscount}) {
   const userData = useSelector(state => state.userData);
    const userRef = useSelector(state => state.userRef);

    const handleClick = async ()=>{
        if(userData)
             await updateCartDetails(userRef, [...userData.cart, cardId]);
    }
    return(
      <Card style={{ width: '18rem', margin: '30px' }}>
            <Card.Img variant="top" src={cardImage} />
            <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>
                    Discount: {cardDiscount} %
                </Card.Text>
                <Button variant="primary" onClick={handleClick}>Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}