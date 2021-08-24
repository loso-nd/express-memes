import './App.css';
import React, {useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import ItemContainer from './pages/ItemContainer';
import ItemForm from './components/ItemForm';
import OrderCard from './components/OrderCard'




function App() {
  const [items, setItems] = useState([]); // store items herein

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
      <Navbar />
      <Switch> {/** Only allows one route to be displayed at ta time. Exact makes them behave as a rails route */}
        <Route exact path="/">
          <ItemContainer items={items} setItems={setItems}/>
        </Route>
        <Route exact path="/items/new">
          <ItemForm items={items} setItems={setItems}/>
        </Route>
        <Route exact path="/orders/:id">
          <OrderCard items={items} setItems={setItems}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;