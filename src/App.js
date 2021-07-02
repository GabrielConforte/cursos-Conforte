import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navegacion from './components/Navegacion';
import ItemCount from './components/ItemCount';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Programing from './pages/Programing';
import Desing from './pages/Desing';
import Marketing from './pages/Marketing';
import SelfImp from './pages/SelfImp';

import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
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
                            <Route path="/Programing">
                                  <Programing/>
                            </Route>
                            <Route path="/Desing">
                              <Desing/>
                            </Route>
                            <Route path="/Marketing">
                              <Marketing/>
                            </Route>
                            <Route path="/SelfImp">
                              <SelfImp/>
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