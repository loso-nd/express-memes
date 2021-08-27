import './App.css';
import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import ItemContainer from './pages/ItemContainer';
import NewItemForm from './components/NewItemForm';
import EditItemForm from './components/EditItemForm';
import OrderCard from './components/OrderCard';
import NewLogin from './components/NewLogin'; 


function App() {
  const [items, setItems] = useState([]); // store items here in
  const [user, setUser] = useState(null)
  if(!user) return <NewLogin onLogin={setUser} />

  return (
    
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
      <Switch> {/** Only allows one route to be displayed at ta time. Exact makes them behave as a rails route */}
      <Route exact path="/items/new">
          <NewItemForm items={items} setItems={setItems}/>
        </Route>
        <Route exact path="/items/:id/edit">
          <EditItemForm items={items} setItems={setItems} user={user}/>
        </Route>
        <Route exact path="/">
          <ItemContainer user={user}/>
        </Route>
        <Route exact path="/orders/:id">
          <OrderCard />
        </Route>
        {/* <Route exact path="/sign_up">
          <Auth setCurrentUser={setCurrentUser}/> //we want to setCurrent in our Auth
        </Route>
        <Route exact path="/log_in">
          <Login setCurrentUser={setCurrentUser}/> //we want to setCurrent in our Auth
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;