import React, {useState, useEffect} from 'react';
import { Input, Form, Textarea } from './styled';
import { useHistory, useParams } from 'react-router-dom';


function EditItemForm({ items, setItems }) { //access to items and setItems as props
    const [itemName, setItemName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')

    const history = useHistory();
    const id = useParams().id //has an id key which is passed inside the route in our App.js

    //We want to populate what already exit on page load so we add a GET fetch 
    useEffect(() => {
        async function fetchItem() {
            const res = await fetch(`/items/${id}`)
            const item = await res.json() //when we call this method we are not getting a json back, we are getting an obj, a data structure that formmatted into json before we call json
            //what do we do with the item after its parsed? We want to update the 
            setItemName(item.item_name)
            setImageUrl(item.image_url)
            setPrice(item.price)
            setDescription(item.description)
        }
        fetchItem()
    }, [])

    //Update our function for a PATCH Fetch
    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch(`/items/${id}`, { //id is coming from useParams
            method: 'PATCH',
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
            setItems(items.map(i => {
               return i.id === parseInt(id) ? newItem : i
            })); //or item.concat(newItem) add to the end of the items
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
                <h1>Update Expressions</h1>
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
            </Form>
            <div>{error ? error.map((error) => <p>{error}</p>) : null}</div>
        </div>
    )
}
export default EditItemForm


/**
 * !FORMS
 *  ?How to make <Form /> a controlled form:
 * * UseState to keep track of input values
 */
