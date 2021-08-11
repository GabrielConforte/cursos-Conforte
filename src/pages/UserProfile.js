import React, {useEffect, useState} from 'react'
import db, { auth } from '../firebase/index';

const UserProfile = ()=>{

    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [userName, setUserName] = useState('');
    const [id, setId] = useState('')
    const [orders, setOrders] = useState([])

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
            let item = db.collection('orders').where('userId','==',id)
            console.log(item)
            
            item.get().then((querySnapshot)=>{
                if(querySnapshot.size === 0){
                    console.log("no resultado")
                }else{
                   
                    setOrders(querySnapshot.docs.map(doc => {
                        return {
                            items: doc.data().items,
                            total: doc.data().total,
                            date: doc.data().date,
                            id: doc.id
                        }
                    }))
                }
            })
          }
        })
      },[id])

    return(
        <div className="mt-2 container bg-dark p-1 rounded">
            <h4>Usuario: {userName}</h4>
            <h4>Direccion de Email: {email}</h4>
            <h4>Telefono: {telefono}</h4>
            <div className="container p-4">
            Mis Pedidos: 
           
            {orders.map((item, index) => {
                    return( <table className="table">
            <thead>
                <tr className="bg-secondary col">
                    <th scope="col">Pedido: ID: {item.id}</th>
                </tr>
              </thead>
              <tbody>
                    <div key={index}>
                            {item.items.map((i, index)=>{
                                return(
                                        <div key={index}>
                                             {i.tittle} - $ {i.price} x {i.cantidad}
                                        </div>
                                )
                            })}
                    </div>
                            </tbody>
                </table>)
                        })}
            </div>            
        </div>
    )
}
export default UserProfile;

/*

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

*/