import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navegacion from './components/Navegacion';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import { Container, Row } from 'react-bootstrap';
import ItemDetailsContainer from './components/ItemDetailsContainer';
import ItemListcontainer from './components/ItemListcontainer';
import Cart from './pages/Cart';
import UserSign from './pages/UserSign';
import UserLog from './pages/UserIn';
import { CartContext } from "./context/cartContext"
import 'bootswatch/dist/quartz/bootstrap.min.css'
import UpdateProfile from './pages/ProfileUpdate';
import './firebase';

function App() {
  const [cartData,setCartData]=useState([])
  const [count, setCount]=useState(0)
  


  return (
  <CartContext.Provider value={{cartData,setCartData,count,setCount}}>
    <Router>
      <Navegacion/>
        <div className="App">
          <Container>
            <Row>
                      <Switch>
                              <Route path="/updateProfile">
                                <UpdateProfile/>
                              </Route>
                              <Route path="/login">
                                <UserLog/>
                              </Route>
                              <Route path="/signin">
                                <UserSign/>
                              </Route>
                              <Route exact path="/">
                                  <Home/>
                                  <ItemListcontainer/>
                              </Route>
                              <Route path='/cart'>
                                <Cart/>
                              </Route>
                              <Route path="/item/:id">
                                  <ItemDetailsContainer/>
                              </Route>
                              <Route path="/:categoria">
                                  <ItemListcontainer/>
                              </Route>
                             
                          </Switch> 
                    </Row>
             
          </Container>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
