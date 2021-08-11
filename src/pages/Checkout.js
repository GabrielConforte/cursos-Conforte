import React, {useState, useEffect, useContext} from "react";
import db, {auth} from '../firebase/index'
import { CartContext } from "../context/cartContext";
import { Form } from 'react-bootstrap';

function Checkout(suma) {

  const context = useContext(CartContext)
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [userName, setUserName] = useState('')
  const [error, setError] = useState('')
  const [id, setId] = useState('')
  const [isLog, setIsLog] = useState(false)
  let total = suma
  
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setIsLog(true)
        db.collection('users').doc(user.uid).get()
        .then(doc => {
          setUserName(doc.data().userName)
          setTelefono(doc.data().tel)
          setEmail(user.email)
          setId(user.uid)
          
        })
      }
    })
  },[])


  
  const setPedido = async (e) => {
    e.preventDefault()
    
    if(!telefono.trim()){
      setError('Telefono vacio')
    }
    if(!email.trim()){
      setError('email vacio')
    }
    if(!userName.trim()){
      setError('Nombre vacio')
    }
    if(!isLog){
      setId("no aplica")
    }
    
      const item = context.cartData.map((curso) => {
      return {id: curso.id,
              tittle: curso.titulo,
              price: curso.price,
              cantidad: curso.cantidad}
    })
   
    const order = {
    buyer:{
        name: userName,
        phone: telefono,
        email: email
      },
      userId: id,
      items:item,
      date: new Date(),
      total: total
    }
    try{
      const data = await db.collection('orders')
        data.add(order).then(({id}) => {
        alert("Pedido Creado su id es: " + id)
      }).catch(error => {
        console.log('error arrojado', error)
      }).finally(() => {
        context.setCartData([])
        context.setCount(0)
    })
      
    }catch(e){
      console.log(e)
    }
    
  }


  return (
          <div>
            {isLog ?
            <div className="container bg-dark p-1 rounded">
                
                      <h3>Datos del pedido: </h3>
                      <h4>Usuario: {userName}</h4>
                      <h4>Direccion de Email: {email}</h4>
                      <h4>Telefono: {telefono}</h4>

                      <button onClick={setPedido} className="btn-violeta">Realizar Pedido</button>
                  
                      {error ?(<div>{error}</div>):(<span></span>)}
              </div>
              :
            <div>
              <Form onSubmit={setPedido} className="rounded bg-dark row d-flex justify-content-center ">

                <Form.Group className="col-8 m-2" controlId="formBasicName">
                      <Form.Label><h4>Nombre</h4></Form.Label>
                      <Form.Control onChange={(e)=>{setUserName(e.target.value)}} type="name" placeholder="Ingrese nombre" value={userName}/>
                </Form.Group>

                <Form.Group className="col-8 m-2" controlId="formBasicEmail">
                  <Form.Label><h4>Direccion de Email</h4></Form.Label>
                  <Form.Control onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Ingrese email" value={email}/>
                </Form.Group>

                <Form.Group className="col-8 m-2" controlId="formBasicTel">
                  <Form.Label><h4>Telefono</h4></Form.Label>
                  <Form.Control onChange={(e)=>{setTelefono(e.target.value)}} type="phone" placeholder="Telefono" value={telefono}/>
                </Form.Group>

                <input value="Realizar Pedido" className="col-8 btn btn-primary m-2" type="submit"/>
              </Form>
            </div>
            }
            </div>
          );
}

export default Checkout;