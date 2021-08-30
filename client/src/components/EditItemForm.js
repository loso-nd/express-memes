import '../App.css';
import React, {useState, useEffect} from 'react';
import { Input, Textarea, Button, Select} from "./styled";
import {FormField, Label} from "../styles";
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';

function EditItemForm({ users}) { //access to items and setItems as props
  
    //State for controlled form
    const [items, setItems] = useState([]); // store items here in
    const [itemName, setItemName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    //const [errors, setErrors] = useState('')
    //const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();
    const id = useParams().id //has an id key which is passed inside the route in our App.js


    // GET items
    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/items');
      
            if(res.ok){
                const data = await res.json();
                console.log(data)
                setItems(data); //update state 
            }
            }
            fetchData() // invoke the function
        }, []);

    //We want to populate what already exit on page load so we add a GET fetch 
    useEffect(() => { 
        async function fetchItem() {
            const res = await fetch(`/items/${id}`)
            const item = await res.json() //callin this method doesnt give us a json back, we are getting an obj, a data structure formmatted into json b4 we call json
            //what do we do with the item after it is parsed? We want to update the state from the original existing content
            //frontend => Backend
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

        const itemData = { //key of item with objects , backend => frontend
            item_name: itemName,
            description,
            image_url: imageUrl,
            price
        };
        const res = await fetch(`/items/${id}`, { //id is coming from useParams
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemData)
        })
        //Check the response by testing the form and adding byebug to the create action controller
        const item = await res.json();
        console.log(items)
        //replace that item we are editing with a new item
        setItems(items.map(i => {
            return i.id === parseInt(id) ? item : i
        })); //or item.concat(newItem) add to the end of the items
            history.push('/')
    }

    return (
        <Wrapper>
        <WrapperChild>
          <h2>New Expressions</h2>
          <form onSubmit={handleSubmit}>
            <FormField>
              <Label htmlFor="itemName">Title</Label>
              <Input
                type="text"
                id="itemName"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </FormField>
            <FormField>
              <Label htmlFor="imageUrl">Image</Label>
              <Input
                type="text"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </FormField>
            <FormField>
              <Label htmlFor="price">Price</Label>
              <Input
                type="number"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </FormField>
            <FormField>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                rows="10"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormField>
            <FormField>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </FormField>
            {/* <FormField>
                {/* {errors?errors.map(error => <div>{error}</div>):null} 
                {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
                </FormField> */}
          </form>
        </WrapperChild>
      </Wrapper>
    )
}

const Wrapper = styled.section`
max-width: 1000px;
margin: 40px auto;
padding: 16px;
display: flex;
gap: 24px;
`;

const WrapperChild = styled.div`
flex: 1;
`;

export default EditItemForm