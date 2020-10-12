import { faDivide } from "@fortawesome/free-solid-svg-icons";
import React,{ useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MyCard } from "../cards/cards";
// import FilterComponent from "../FilterComponent/FilterComponent";

export default function Items() {
    const [inventoryList, setInventoryList] = useState([]);
    const inventory = useSelector(state => state.inventory);
    const orderBy = useSelector(state => state.orderBy);
    const category = useSelector(state => state.category);
    useEffect(() => {
        const myInventory = [...inventory];
        if (category === 'pantry') {
            myInventory = myInventory.filter(item => item.section === 'Pantry');
        } else if(category === 'clothing') {
            myInventory = myInventory.filter(item => item.section === 'Pantry');
        }
        if (orderBy && orderBy === 'discount') {
            myInventory.sort(function(item1,item2) {
                return item1.discount > item2.discount ? -1 : item1.discount < item2.discount ? 1 : 0;
            })
        }

        setInventoryList(myInventory);
    }, [inventory,orderBy,category]);
    return (
      <div className="wrapper">
        <FilterComponent></FilterComponent>
        <div className="items-container">
          {inventoryList.map((item) => (
            <MyCard key={item.id} cardData={item}></MyCard>
          ))}
        </div>
      </div>
    );
}