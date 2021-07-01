import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navegacion from './components/Navegacion';
import ItemCount from './components/ItemCount';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { Container, Row } from 'react-bootstrap';
import ItemListcontainer from './components/ItemListcontainer'
//

function App() {
  return (<Router>
      <div className="App">
        <Navegacion/>
        <Container fluid>
          <Row>
                    <Switch>
                            <Route path="/Home">
                              <Home/>
                            </Route>
                            <Route path="/Category">
                                  <Category/>
                            </Route>
                            <Route path="/Products">
                              <Products/>
                            </Route>
                            <Route path="/Checkout">
                              <Checkout/>
                            </Route>
                            <Route path="/Cart">
                              <Cart/>
                            </Route>
                        </Switch></Row>
        <Row><ItemListcontainer></ItemListcontainer><ItemCount stock={10} initial={0}/></Row></Container>
      </div>
    </Router>
  );
}

export default App;

/*Referencia:
        <Switch>                
             <Route path='/panda' component={Panda}/>  
             <Route path='/gorilla' component={Gorilla}/>               
             <Route path='/rhino' component={Rhino}/> 
             <Route path='/seaTurtle' component={SeaTurtle}/>  
             <Route path='/' component={Home}/>            
          </Switch> */