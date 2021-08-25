import React from 'react'
import { Card, Image } from './styled'
import { Link, useHistory } from 'react-router-dom'

// const Card = styled.div `
//     padding: 1rem;
//     @media (min-width: 960px) {
//         width: 25%;
//     }
// `;

// const Image = styled.img `
// max-width:80%;
// `;

function ItemCard({ item }) {

    const history = useHistory();

    async function handleClick(e) {
        const res = await fetch('/orders', { 
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //should match our OrderController#create action
                order: {
                    user_id: 7,
                    item_id: item.id // since we are passing in item as props, if the item has an (id) we can pull (id) out of that item 
                }
            })
        })
        const order = await res.json();
        history.push(`/orders/${order.id}`); //interpolate json.id bc json is the varibale name used to parse the json response.
       // debugger
    }

    return (
        <Card>
            <Image src={item.image_url} />
            <h2>{item.item_name}</h2>
            <h2>{item.price}</h2>
            <p>{item.description}</p>
            <p>
                <Link to={`/items/${item.id}/edit`}>
                    <button type="button">Edit</button>
                </Link> 
                    <button onClick={handleClick} type="button">Buy</button></p>
        </Card>
    );
}

export default ItemCard
