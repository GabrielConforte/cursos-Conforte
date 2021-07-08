import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navegacion from './components/Navegacion';
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


function App() {
  return (
  <Router>
      <div className="App">
        <Navegacion/>
        <Container>
          <Row>
                    <Switch>
                            <Route path="/Home">
                                 <Home></Home>
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
                        </Switch>
                  </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
//<ItemCount stock={10} initial={0}

/**Hola Gabriel, en el componente ItemListContainer se hace uso de la promesa
 * y la data que se obtiene de esta se guarda en el estado  "referens" como lo hiciste muy bien!
 * pero luego esa data se pasa a ItemList por props y en el componente ItemList se usa esa data y
 * hace el mapeo de Item para obtener la cantidad de items segun se tenga los productos en el array,
 * luego por otro lado está el ItemDetailContainer que es otro contenedor que no va tener relación
 * con los componentes que ya te describí (ItemListcontainer, ItemList, Item) ,
 * en este contenedor lo que se va tener también es la promesa y la data que seria el detalle del producto
 * le va pasar a ItemDetail por props, el componente ItemDetail va tener la imagen,
 * precio y detalle incluso el contador estaría aca.
 * El componente Item va tener imagen, precio y titulo simplemente. Cualquier duda avisame. Saludos!* */