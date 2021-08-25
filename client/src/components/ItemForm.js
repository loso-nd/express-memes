import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';

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
        border-radius: 0.375;
        height: 15rem;    
    `;


function ItemForm({ items, setItems }) { //access to items and setItems as props
    const [itemName, setItemName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')

    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch('/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                item: { //key of item with objects 
                    store_id: 4,
                    item_name: itemName,
                    description,
                    image_url: imageUrl,
                    price
                }
            })
        })
        //Check the response by testing the form and adding byebug to the create action controller
        if (response.ok){
            const newItem = await response.json();
            setItems([...items, newItem]) //or item.concat(newItem) add to the end of the items
            history.push('/')
        } else {
            const error = await response.json();
            console.log(error)
           setError(error.message)
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <h1>Express YoSelf</h1>
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
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                >
                </Textarea>
                <br />
                <input type="submit" value="Post" />
            </Form>
            <div>{error ? error.map((error) => <p>{error}</p>) : null}</div>
        </div>
    )
}
export default ItemForm


/**
 * !FORMS
 *  ?How to make <Form /> a controlled form:
 * * UseState to keep track of input values
 */

/**
 * !POST fetch
 *  ? Steps
    * * async func for handleSubmit
    * * create variable response set equal to await fetch()
    * * method, headers, body {
    * ! keys the database should have and the values will be our state. This item params must match backend
    * ? Where is this information going? 
    * * The controller. We can use our strong params to tell us what the body should be.  
    * }
 * * parse JSON response response & set it to state ( where we use the spread op and add it to the end of items)
 * * add redirect to home page
 */

/**
 * !Errors
 * ? How can we display errors to the user?
 *  * UseState to keep track of errors since error.message in our response is an array
 *  * we can map over the errors and display error
 */