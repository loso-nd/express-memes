import React, {useState, useEffect} from 'react'
import ItemCard from "../components/ItemCard"
import { Grid } from '../components/styled';

function ItemContainer({ user }) {
    const [items, setItems] = useState([]); // store items here in

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/items');
            const items = await res.json();
            setItems(items); //update state 
            }
            fetchData() // invoke the function
        }, [])
            console.log(items)
    return (
        <>
            <h1>Items</h1>
            <Grid>
                {items.map((item) => (
                    <ItemCard 
                    key={item.id}
                    item={item}
                    items={items}
                    setItems={setItems}
                    />
                ))}
            </Grid>
        </>
    );
}
export default ItemContainer