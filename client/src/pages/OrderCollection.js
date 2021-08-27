import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'; //redirect to homepage
import styled from 'styled-components';
import { Box, Button } from "../styles.js";
import ItemCard from '../components/ItemCard'; //same layout for the OrderCard


function OrderCollection({ user }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function getOrders() {
            const res = await fetch(`/users/${user.id}`)
            if(res.ok){
                const user = await res.json()
                setItems(user.user_item)
            }
        }
        getOrders();
    }, []);
    return (
        <Wrapper>
            {items.length > 0 ? (
                items.map((item) => (
                    <Box>
                        <ItemCard item={item} user={true}/>
                    </Box>
                ))
            ) : (
                <>
                    <h2>No Items Found</h2>
                    <Button as={Link} activeClassName="active" to="/">
                        Order New Item
                    </Button>
                </>
            )}
        </Wrapper>
    )
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

export default OrderCollection