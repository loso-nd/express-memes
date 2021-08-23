import React from 'react'
import styled from 'styled-components'

const Card = styled.div `
    padding: 1rem;
    @media (min-width: 1366px) {
        width: 25%;
    }
`;


const Image = styled.img `
max-width:80%;
`;


function ItemCard({ item }) {
    return (
        <Card>
            <Image src={item.image_url} />
            <h2>{item.item_name}</h2>
            <h2>{item.price}</h2>
            <h2>{item.description}</h2>
        </Card>
    );
}

export default ItemCard
