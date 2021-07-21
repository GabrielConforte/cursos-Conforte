import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,Link,
} from "react-router-dom";
import Checkout from "./Checkout";
import { CartContext } from '../components/cartContext';

function Cart() {

  const context = useContext(CartContext)

  const [cart, setCart] = useState([])
  useEffect(()=>{
    
    setCart(context.cartData)

    

  },[context.cartData]);

 

  return (
    <div className="App-body"> {context.cartData.length !== 0 ?
    <Router>
    <h1>Tu carrito</h1>
    <ul className="row justify-content-start">
      {cart.map((curso) => (
        <li className="col-4" key={curso.id}>
          <div className="card">
            <div><img className="card-img-top"alt="placeholder img" src={curso.imagen}></img></div>
            <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item fs-5">{curso.titulo}</li>
              <li className="list-group-item fs-5">X {curso.cantidad}</li>
              <li className="list-group-item"><button onClick={()=>{
              let a = context.cartData.filter((id) => id.id !== curso.id)
              context.setCartData(a)
              }}className="btn btn-danger">Eliminar</button></li>
           </ul>
          </div></div>
        </li>
      ))}
    </ul>
        <div> 
      <Link to="/Checkout"><button className="btn btn-primary">Comprar</button></Link>
                            <button  onClick={()=>{
              context.setCartData([])}}
               className="btn btn-warning">Limpiar</button></div> 
        <Switch>
            <Route path="/Checkout">
                <Checkout/>
            </Route>
        </Switch>
    </Router> : <div><div> Tu carrito esta Vacio </div>
                <div><Link to="/"><button className="btn btn-primary">Vamos alla!</button></Link></div></div>}
     
      </div>
  );
}

export default Cart;