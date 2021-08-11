import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,Link,
} from "react-router-dom";
import Checkout from "./Checkout";
import {CartContext } from "../context/cartContext"
import {auth} from '../firebase/index';

function Cart() {

  const context = useContext(CartContext)
  const [cart, setCart] = useState([])
  const [comprobar, setComprobar] = useState(false)

  let con = context.cartData
  let suma = 0;
  con.forEach (function(con){
    suma += (con.cantidad*con.price)
  });

  useEffect(()=>{
    setCart(context.cartData)
    auth.onAuthStateChanged((user)=>{
      if(user){
        setComprobar(true)
      }
    })
    },[context.cartData]);

  return (
    <div > {context.cartData.length !== 0 ?
    <Router>
    <h1>Tu carrito</h1>
    <div className="row">
      <table className="table">
              <thead>
                <tr>
                  <th scope="col"> </th>
                  <th scope="col">Item</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Opciones</th>
                </tr>
              </thead>
              <tbody>
      {cart.map((curso) => (
                <tr key={curso.id}>
                    <th scope="row"></th>
                    <td >{curso.titulo}</td>
                    <td>x{curso.cantidad}</td>
                    <td>${curso.price*curso.cantidad}</td>
                    <td>
                        <button onClick={()=>{
                          let a = context.cartData.filter((id) => id.id !== curso.id)
                          context.setCartData(a)
                          context.setCount(context.count-curso.cantidad)
                        }}className="btn btn-danger btn-sm">Eliminar</button>
                        
                    </td>
                </tr>
      ))}</tbody>
      </table>
    </div>
        <div><h4> El total de su compra es: ${suma} </h4> <hr></hr>
                        <Link to="/Checkout">
                            <button className="btn-violeta m-1">Comprar</button></Link> 
                            <button onClick={()=>{
                                context.setCartData([])
                                context.setCount(0)}}
                                
                                className="btn-violeta m-1">Limpiar
                            </button></div> 
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