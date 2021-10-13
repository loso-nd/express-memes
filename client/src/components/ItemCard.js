import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { Card, Image, Button, Errors, Select } from './styled'
import { FormField, Label} from "../styles";

function ItemCard({ item, items, setItems, userOrders, user, ordered, filterItems}) {
  let history = useHistory();
  const [errors, setErrors] = useState(null);
  //const [selectedCategory, setSelectedCategory] = useState("All");
  //console.log(user)


  //Deleted Ordered 
  async function deleteOrdered(){
    const deleteData ={
      item_id: item.id
    };
    const res = await fetch(`/delete-order-item`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(deleteData)
    });
    if (res.ok) {
      const deleted = await res.json();
      filterItems(item)
    }
  }

  //Delete item
  async function deleteItem() {
    const res = await fetch(`/items/${item.id}`, {
      method: 'DELETE'
    })
    if (res.ok) {
      setItems(items.filter((i) => i.id !== item.id));
    }
  }

  //Review POST
  async function orderItem() {
    const orderData = {
      item_id: item.id,
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
    <Card>
      <Image src={item.image_url} alt={item.item_name} />
      <h2>{item.item_name}</h2>
      {ordered ? 
      <FormField>
        <Label htmlFor="product">Product</Label>
          <Select >
              <option  value="shirt">Sticker</option>
              <option value="Pin">Pin</option>
              <option  selected value="shirt">Shirt</option>
          </Select>
          <strong style={{fontSize: "22px"}}>${parseFloat(item.price).toFixed(2)}</strong>
          
        </FormField>
        : 
        null}
      {/* <h3> ${parseFloat(item.price).toFixed(2)}</h3> */}
      <p>{item.description}</p>
      {user.admin === "true" ? 
      <>
        <Link to={`/items/${item.id}/edit`}>
          <Button grey>Edit</Button>
        </Link>

        <Button red onClick={deleteItem}>
          Delete
        </Button>
        </>
     
      : ( ordered ?
        <Button red onClick={deleteOrdered}>
          Delete
        </Button>
      :
        <Button green onClick={orderItem}>
          Order
        </Button>
        )
      }

      <Errors>
        <p>{errors}</p>
      </Errors>
    </Card>
  );
}

export default ItemCard;

// import React, { useState } from 'react'
// import { Card, Image, Button, Errors } from './styled'
// import { Link, useHistory } from 'react-router-dom'

// function ItemCard({ item, items, setItems, userOrders, user }) {
//     let history = useHistory();
//     const [errors, setErrors] = useState(null)

//     //Delete item
//     async function deleteItem() {
//         const res = await fetch(`/items/${item.id}`, {
//           method: 'DELETE'
//         })
//         if (res.ok) {
//           setItems(items.filter((i) => i.id !== item.id));
//         }
//       }

//     //fetch POST
//     async function orderItem() {
//         const orderData = {
//             item_id: item.id
//         }
//         const res = await fetch('/orders', { 
//             method: 'POST', 
//             headers: { 
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ orderData })
//         });
//         if (res.ok){
//             const order = await res.json();
//             console.log(order)
//             history.push(`/orders`); //interpolate json.id bc json is the varibale name used to parse the json response.
//         } else {
//             const error = await res.json();
//             setErrors(error.message)
//         }
//     }

//     return (
//         <Card>
//             <Image src={item.image_url} alt={item.item_name}/>
//             <h2>{item.item_name}</h2>
//             <h2>{item.product}: ${parseFloat(item.price).toFixed(2)}</h2>
//             <p>{item.description}</p>
//             <Button red onClick={deleteItem}>
//                 Delete
//             </Button>
//             <Button green onClick={orderItem}>
//                 Order
//             </Button>
//             <Link to={`/items/${item.id}/edit`}>
//                 <Button grey>Edit</Button>
//             </Link>
//             <Errors>
//                 <p>{errors}</p>
//             </Errors>
//         </Card>
//     );
// }
// export default ItemCard