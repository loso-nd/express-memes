import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { Card, Image, Button, Errors } from './styled'

function OrderCard({ item, items, setItems, userOrders, user }) {
  console.log(userOrders)
  let history = useHistory();
  const [errors, setErrors] = useState(null);
  console.log(items)

  //Delete item
  async function deleteItem() {
    const res = await fetch(`/orders/${item.id}`, {
      method: 'DELETE'
    })
    if (res.ok) {
      setItems(items.filter((i) => i.id !== item.id));
     
    }
  }

  //Review POST
  async function orderItem() {
    const orderData = {
      item_id: item.id
    };
    const res = await fetch(`/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });
    if (res.ok) {
      const order = await res.json();
      console.log(order)
      history.push(`/orders`);
    } else {
      const error = await res.json()
      setErrors(error.message)
    }
  }

    return (
        <>
            {/* {order?<div key={order.id}>Item:{order.item.item_name} User:{order.user.user_name}</div>:null}  */}
            <h2>Your Order has been Created!</h2>
            <Card>
                <Image src={item.image_url} alt={item.item_name} />
                <h2>{item.item_name}</h2>
                <h3>{item.product}: ${parseFloat(item.price).toFixed(2)}</h3>
                <p>{item.description}</p>
                <Button green onClick={orderItem}>
                    Order
                </Button>
        
                <Button red onClick={deleteItem}>
                    Delete
                </Button>

                <Errors>
                    <p>{errors}</p>
                </Errors>
            </Card>
        </>
    )
}
export default OrderCard