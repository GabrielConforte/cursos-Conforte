import React, {useState, useEffect, useContext} from "react";
import db, {auth} from '../firebase/index'
import { CartContext } from "../context/cartContext";

function Checkout(suma) {

  const context = useContext(CartContext)
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [userName, setUserName] = useState('')
  const [error, setError] = useState('')
  const [id, setId] = useState('')
  let total = suma
  
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
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
          <div className="container bg-dark p-1 rounded">
              
                    <h3>Datos del pedido: </h3>
                    <h4>Usuario: {userName}</h4>
                    <h4>Direccion de Email: {email}</h4>
                    <h4>Telefono: {telefono}</h4>

                    <button onClick={setPedido} className="btn-violeta">Aceptar</button>
                
                    {error ?(<div>{error}</div>):(<span></span>)}
            </div>
          );
}

export default Checkout;