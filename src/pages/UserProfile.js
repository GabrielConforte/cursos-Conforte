import React, {useEffect, useState} from 'react'
import db, { auth } from '../firebase/index';
import { Link } from "react-router-dom";

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
        <div className="modal-body mt-2 container bg-dark  p-2 rounded">
            <h4>Usuario: {userName}</h4>
            <h4>Direccion de Email: {email}</h4>
            <h4>Telefono: {telefono}</h4>

            
                <Link to="/profileUpdate"><button className="btn btn-primary">Actualizar Datos</button></Link>
                
            

            <div className="container p-4">
            <h3>Mis Pedidos: </h3>
           
            {orders.map((item, index) => {
                    return( <table key={index} className="table">
            <thead>
                <tr className="bg-secondary col-3">
                    <th scope="col">Pedido: ID: {item.id} - ${item.total.total}</th>
                </tr>
              </thead>
              <tbody >
                            {item.items.map((i, index)=>{
                                return(
                                        <tr key={index}>
                                             <td >{i.tittle} x {i.cantidad}</td>
                                        </tr>
                                )
                            })}
                            </tbody>
                </table>)
                        })}
            </div>            
        </div>
    )
}
export default UserProfile;