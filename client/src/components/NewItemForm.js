import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Input, Form, Textarea, Errors } from "./styled";

function NewItemForm({ items, setItems }) { //access to items and setItems as props
    const [itemName, setItemName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState([])


    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch('/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                item: { //key of item with objects 
                    store_id: 20,
                    item_name: itemName,
                    description,
                    image_url: imageUrl,
                    price
                }
            })
        })
        //Check the response by testing the form and adding byebug to the create action controller
        if (res.ok){
            const newItem = await res.json();
            setItems([...items, newItem]) //or item.concat(newItem) add to the end of the items
            history.push('/')
        } else {
            const error = await res.json();
            console.log(error)
            setErrors(error.message)
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
                <Input submit type="submit" value="Post" />
                <Errors>{errors}</Errors>
            </Form>
            {/* <div>{errors ? errors.map((error) => <p>{error}</p>) : null}</div> */}
            
        </div>
    )
}
export default NewItemForm;


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