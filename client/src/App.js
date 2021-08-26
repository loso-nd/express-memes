import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import ItemContainer from './pages/ItemContainer';
import NewItemForm from './components/NewItemForm';
import EditItemForm from './components/EditItemForm';
import OrderCard from './components/OrderCard';
import Auth from './components/Auth';
import Login from './components/Login';


function App() {
<<<<<<< HEAD
  const [items, setItems] = useState([]); // store items here in
=======
  const [items, setItems] = useState([]); // store items herein
>>>>>>> 228fa657b937d9978b3f579651a693202228b3b0
  const [currentUser, setCurrentUser] = useState([])

  //render items to the dom on page load via useEffect
  useEffect(() => {
    async function fetchData() {
      const result = await fetch('/items');
      const items = await result.json();
      setItems(items); //update state 
    }
    fetchData() // invoke the function
  }, [])
  console.log(items)
  return (
    
    <div className="App">
      <Navbar currentUser={currentUser} />
      <Switch> {/** Only allows one route to be displayed at ta time. Exact makes them behave as a rails route */}
      <Route exact path="/items/new">
          <NewItemForm items={items} setItems={setItems}/>
        </Route>
        <Route exact path="/items/:id/edit">
          <EditItemForm items={items} setItems={setItems}/>
        </Route>
        <Route exact path="/">
          <ItemContainer items={items} setItems={setItems}/>
        </Route>
        <Route exact path="/orders/:id">
          <OrderCard />
        </Route>
        <Route exact path="/sign_up">
          <Auth setCurrentUser={setCurrentUser}/> //we want to setCurrent in our Auth
        </Route>
        <Route exact path="/log_in">
          <Login setCurrentUser={setCurrentUser}/> //we want to setCurrent in our Auth
        </Route>
      </Switch>
    </div>
  );
}

export default App;