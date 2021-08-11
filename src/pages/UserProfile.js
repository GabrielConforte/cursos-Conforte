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
            /**item.get().then((querySnapshot) => {
                    if(querySnapshot.size === 0){
                        console.log("no resultado")
                    }else{ */
            item.get().then((querySnapshot)=>{
                if(querySnapshot.size === 0){
                    console.log("no resultado")
                }else{
                    /**setCurso(querySnapshot.docs.map(doc => {
                               return {
                                    id:doc.id,
                                    categoria:doc.data().categoria,
                                    tittle:doc.data().tittle,
                                    text:doc.data().text,
                                    image:doc.data().image,
                                    price:doc.data().price}}))
                                        }
                            }).catch(error => {console.log("error", error)
                            }).finally(()=>{setLoading(false)})}, 1500) */
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
        <div className="App-body">
            <h4>Usuario: {userName}</h4>
            <h4>Direccion de Email: {email}</h4>
            <h4>Telefono: {telefono}</h4>

            <h4>Mis Pedidos: </h4>
            {orders.map((item, index) => {
                    return(
                    <div key={index}>
                            {item.items.map((i, index)=>{
                                return(
                                    <div key={index}>
                                        <div>
                                            <ul>Titulo: {i.tittle}
                                               <li>Precio: {i.price}</li> 
                                               <li>Cantidad: {i.cantidad}</li> 
                                            </ul>
                                        </div>
                                    </div>
                                )
                            })}
                        <p>ID: {item.id}</p>
                    </div>
                            )
                        })}
        </div>
    )
}
export default UserProfile;
