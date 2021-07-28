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

  let con = context.cartData
  let suma = 0;
  con.forEach (function(con){
    
    suma += (con.cantidad*con.price)
    
  });

  useEffect(()=>{
    setCart(context.cartData)
    },[context.cartData]);

  return (
    <div > {context.cartData.length !== 0 ?
    <Router>
    <h1>Tu carrito</h1>
    <div className="row">
      {cart.map((curso) => (

        <div className="col-md-3" key={curso.id}>
          <div className="card">
            <div><img className="card-img-top"alt="placeholder img" src={curso.imagen}></img></div>
            <div className="card-body">
            <ul className="list-group list-group-flush">
                <li className="list-group-item fs-5">{curso.titulo}</li>
                <li className="list-group-item fs-5">X {curso.cantidad}</li>
                <li className="list-group-item">
                <button onClick={()=>{
                  let a = context.cartData.filter((id) => id.id !== curso.id)
                  context.setCartData(a)
              }}className="btn btn-danger">Eliminar</button></li>
           </ul>
          </div></div>
        </div>
        
      ))}
    </div>
        <div> <hr></hr><h4> El total de su compra es: ${suma} </h4> <hr></hr>
      <Link to="/Checkout"><button className="btn btn-primary m-1">Comprar</button></Link>
                            <button  onClick={()=>{
              context.setCartData([])}}
               className="btn btn-warning m-1">Limpiar</button></div> 
        <Switch>
            <Route path="/Checkout">
                <Checkout total={suma}/>
            </Route>
        </Switch>
    </Router> : <div className="App-body"><div> Tu carrito esta Vacio </div>
                <div><Link to="/"><button className="btn btn-primary">Vamos <b>alla!</b></button></Link></div></div>}
     
      </div>
  );
}

export default Cart;