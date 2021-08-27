import React, { useState } from 'react'
import { Card, Image, Button, Errors } from './styled'
import { Link, useHistory } from 'react-router-dom'

function ItemCard({ item, items, setItems }) {
    let history = useHistory();
    const [errors, setErrors] = useState(null)

    //Delete item
    async function deleteItem() {
        const res = await fetch(`/items/${item.id}`, {
          method: 'DELETE'
        })
        if (res.ok) {
          setItems(items.filter((i) => i.id !== item.id));
        }
      }

    //fetch POST
    async function orderItem(e) {
        const res = await fetch('/orders', { 
            method: 'POST', 
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //should match our OrderController#create action
                order: {
                    user_id: 31,
                    item_id: item.id // since we are passing in item as props, if the item has an (id) we can pull (id) out of that item 
                }
            })
        })
        if (res.ok){
            const order = await res.json();
            history.push(`/orders/${order.id}`); //interpolate json.id bc json is the varibale name used to parse the json response.
        } else {
            const error = await res.json();
            setErrors(error.message)
        }
       // debugger
    }

    return (
        <Card>
            <Image src={item.image_url} />
            <h2>{item.item_name}</h2>
            <h2>{item.product}: ${item.price}0</h2>
            <p>{item.description}</p>
            <Button red onClick={deleteItem}>
                Delete
            </Button>
            <Button green onClick={orderItem}>
                Order
            </Button>
            <Link to={`/items/${item.id}/edit`}>
                <Button grey>Edit</Button>
            </Link>
            <Errors>
                <p>{errors}</p>
            </Errors>
        </Card>
    );
}
export default ItemCard