import React, { useState } from 'react'
import styled from 'styled-components'

function ItemForm({ items, setItems }) {
    const [itemName, setItemName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    //const [error, setError] = useState('')

    //good example of flexbox
    const Form = styled.form `
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 100vh;
    `;

    const Input = styled.input `
        padding: 1em;
        margin: 1em 0;
        width: 18em;
        border-radius: 0.375em;
    `;

    const Textarea = styled.textarea `
        padding: 1em;
        margin: 1em 0;
        width: 18em;
        border-radius: 0.375
        height: 10em;    
    `;


    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch('/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: {
                    store_id: 1,
                    item_name: itemName,
                    description: description,
                    image_url: imageUrl,
                    price: price
                }
            })
        })
        // if (response.ok){
        //     const newItem = await response.json();
        //     setItems([...items, newItem]) //or item.concat(newItem)
        // } else {
        //     const error = await response.json();
        //     setError(error.message)
        // }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <h1>New Item</h1>
                <Input
                    type="text"
                    placeholder="Item Name"
                    name="itemName"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Image Url"
                    name="image"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <Textarea
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                >
                </Textarea>
                <br />
                <input type="submit" value="Post" />
            </Form>
            
        </div>
    )
}

export default ItemForm
