import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Input, Textarea, Button } from "./styled";
import {Error, FormField, Label} from "../styles";
import styled from 'styled-components';
import  { useSelector, useDispatch } from 'react-redux' //connecting react app to the reduc store


function NewItemForm({user, items, setItems }) { //access to items and setItems as props
    const [imageUrl, setImageUrl] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();
    const titleName = useSelector((state) =>  state.itemName );
    const dispatch = useDispatch();
    console.log(titleName)

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        const itemData = {
          item_name: titleName,
          description,
          image_url: imageUrl,
          price
      };
        async function createItem(){
           const res = await fetch("/items", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemData)
            })
             //Check the response by testing the form and adding byebug to the create action controller
            if(res.ok){
               // const newItem = await res.json();
                //setItems([...items, newItem]) //or item.concat(newItem) add to the end of the items
                setIsLoading(false);
                history.push('/')
            } else {
                const err = await res.json();
                console.log(err)
                setErrors(err.errors)
            };
       }
       createItem();
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
                value={titleName}
                onChange={(e) => dispatch({payload:e.target.value, type: "setItemName"})} //dispatch the action to reducer
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
                {isLoading ? "Loading..." : "Submit"}
              </Button>
            </FormField>
            <FormField>
              {errors.map((err) => (
                <Error key={err}>{err}</Error>
              ))}
            </FormField>
          </form>
        </WrapperChild>
      </Wrapper>
    );
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
