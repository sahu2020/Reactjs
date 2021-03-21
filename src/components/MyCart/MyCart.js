import React from "react";
import {useSelector} from "react-redux";
import './MyCart.css'
import { Card, Button } from "react-bootstrap";
import MyCard from '../Cards/Card'

export default function MyCart(){
    const userData = useSelector(state => state.userData);
  
    const inventory = useSelector(state => state.inventory);
    console.log(userData)
    const CartCArd = ({item}) => {
        return(
                    <Card style={{ width: '18rem', margin: '30px' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    Discount: {item.discount} %
                </Card.Text>
               
            </Card.Body>
        </Card>
        )

    }
    
    return(
        <div className='cart-container'>
            {inventory?.filter(item => userData?.cart.includes(item.id)).map(item => <CartCArd key={item.id} item={item}/>)}
        </div>
    )
}