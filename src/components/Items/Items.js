import React, {useEffect, useState} from "react";
import './Items.css';
import MyCard from '../Cards/Card'
import { useSelector } from "react-redux";

import FilterComponent from '../filter/filter'

export default function Items() {
    const [inventoryList, setInventoryList] = useState([]);
    const inventory = useSelector(state => state.inventory);
    const orderBy = useSelector(state => state.orderBy);
    const category = useSelector(state => state.category);
    useEffect(()=>{
        let myinventory = [...inventory];
        if(category === 'pantry'){
            myinventory =    myinventory.filter((item) => item.section === 'Pantry')
        }
        else if(category === 'clothing'){
            myinventory =    myinventory.filter((item) => item.section === 'Clothing')
        }

        if(orderBy && orderBy === 'discount'){
            myinventory.sort((item1,item2) =>{
               return item1.discount > item2.discount ? -1 : item1.discount < item2.discount? 1 :0;
        })
        }

        setInventoryList(myinventory)
    },[inventory,orderBy,category])

   return (
            <div className='items-container'>
                <FilterComponent/>
           {inventoryList?.map(item => <MyCard cardId={item.id} cardTitle={item.name} cardImage={item.image} cardDiscount={item.discount}/>)}
            </div>
    )
}