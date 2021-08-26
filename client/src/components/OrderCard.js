import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Card, Image } from './styled'

function OrderCard() {
    //useState to keep track of Orders
    const [order, setOrder] = useState(null)
    const id = useParams().id //we can use the :id passed into route as the id for the fetch

    //fetch order via useEffect not handler function bc we want to render orders on page load
    useEffect(() => {
        async function fetchOrder() {
            let res = await fetch(`/orders/${id}`)//fetch orders
            let order = await res.json() //parse the json response
            //debugger
            setOrder(order) //update state
        }
        fetchOrder()
    }, [])
    return (
        <>
            {/* {order?<div key={order.id}>Item:{order.item.item_name} User:{order.user.user_name}</div>:null}  */}
            <h2>Your Order has been Created!</h2>
            {order 
            ? (
                <Card key={order.id}>
                <Image src={order.item.image_url} />
                <h2>User: {order.user.username}</h2>
                <h2>Title: {order.item.item_name}</h2>
                <h2>Price: {order.item.price}</h2>
                <p>Item Description: {order.item.description}</p>
            </Card>
            ) : null
            }
        </>
    )
}
export default OrderCard