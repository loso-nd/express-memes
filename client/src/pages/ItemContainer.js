import React from 'react'
import styled from "styled-components"
import ItemCard from "../components/ItemCard"

const Grid = styled.div `
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
`

function ItemContainer({ items , setItems }) {
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
