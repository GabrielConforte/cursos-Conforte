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
import { CartContext } from './components/cartContext';

function App() {
 const [cartData,setCartData]=useState([])

  return (
  <CartContext.Provider value={{cartData,setCartData}}>
    <Router>
      <Navegacion/>
        <div className="App">
          
          <Container>
            <Row>
                      <Switch>
                      <Route exact path="/">
                                  <Home/>
                                  <ItemListcontainer/>
                              </Route>
                              <Route path='/cart'>
                                <Cart/>
                              </Route>
                              <Route path="/itemDetailsContainer/:id">
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
