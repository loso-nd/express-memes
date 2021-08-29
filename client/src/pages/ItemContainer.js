import React, {useState, useEffect} from 'react'
import ItemCard from "../components/ItemCard"
import { Grid } from '../components/styled';

function ItemContainer({ user }) {
    const [items, setItems] = useState([]); // store items here in

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/items');
            if(res.ok){
                const data = await res.json();
                console.log(data)
                setItems(data); //update state 
            }
            }
            fetchData() // invoke the function
        }, []);
          
    return (
        <>
            <h1>Items</h1>
            <Grid>
                {items.map((item) => (
                    <ItemCard 
                    key={item.id} setItems={setItems} 
                    items={items}  
                    item={item} user={user}
                    />
                ))}
            </Grid>
        </>
    );
}
export default ItemContainer