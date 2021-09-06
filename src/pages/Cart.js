import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import {CartContext } from "../context/cartContext"

function Cart() {

  const context = useContext(CartContext)
  const [cart, setCart] = useState([])
  const [verForm, setVerForm] = useState(false)
  let con = context.cartData
  
  let suma = 0;
  con.forEach (function(con){
    suma += (con.cantidad*con.price)
  });

  useEffect(()=>{
    setCart(context.cartData)
    },[context.cartData]);

  return (
    <div > {context.cartData.length !== 0 ?<>
    <h1> Tu carrito</h1>
    <div className="row bg-dark rounded">
      <table className="p-2 table">
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
    <div><h4> El total de su compra es: ${suma} </h4>
    
    <hr></hr>
                            <button className="btn-violeta m-1" onClick={()=>{setVerForm(true)}}>Comprar</button>
                            <button onClick={()=>{
                                context.setCartData([])
                                context.setCount(0)}}
                                
                                className="btn-violeta m-1">Limpiar
                            </button></div> 

                            {verForm ? <Checkout total={suma}/> : <></>}</>
                                
                        :
                        <div className="App-body"><div> Tu carrito esta Vacio </div>
                        <div><Link to="/"><button className="btn btn-primary">Vamos <b>alla!</b></button></Link></div></div>}
      </div>
  );
}

export default Cart;