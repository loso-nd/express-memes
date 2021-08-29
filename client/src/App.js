import './App.css';
import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import NewLogin from './components/NewLogin'; 
import OrderCollection from './pages/OrderCollection';
import ItemContainer from './pages/ItemContainer';
import EditItemForm from './components/EditItemForm'
import NewItemForm from './components/NewItemForm';


function App() {
  const [user, setUser] = useState(null)

  if(!user) return <NewLogin onLogin={setUser} />

  return (
    
    <div className="App">
      <Navbar user={user} setUser={setUser}/>
      <main>
        <Switch> {/** Only allows one route to be displayed at ta time. Exact makes them behave as a rails route */}
          <Route exact path="/new">
              <NewItemForm  user={user}/>
            </Route>
            <Route exact path="/">
              <ItemContainer user={user}/>
            </Route>
            <Route exact path="/orders">
              <OrderCollection user={user}/>
            </Route>
            <Route exact path="/items/:id/edit">
              <EditItemForm user={user}/>
            </Route>
        </Switch>
      </main>
    </div>
  );
}
export default App;