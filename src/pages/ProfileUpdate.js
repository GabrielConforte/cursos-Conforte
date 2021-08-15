import React , { useState, useEffect }from 'react'
import { Form } from 'react-bootstrap';
import db, {auth} from '../firebase/index'
import {useHistory} from 'react-router-dom';

const UpdateProfile = () =>{

    const historial = useHistory()
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [error, setError] = useState('')

    const [viejoNombre, setViejoNombre] = useState('')
    const [viejoTelefono, setViejoTelefono] = useState('')

    useEffect(()=>{
      auth.onAuthStateChanged((user)=>{
        if(user){
          db.collection('users').doc(user.uid).get()
          .then(doc => {setViejoNombre(doc.data().userName)
                        setViejoTelefono(doc.data().tel)})
        }
      })
    },[])

    const setProfile = (e) =>{

        e.preventDefault()
    
        if(!telefono.trim()){
        setError('Telefono vacio')
        }

        if(!nombre.trim()){
        setError('Nombre vacio')
        }
        else{
          auth.onAuthStateChanged((user)=>{
            if(user){
               db.collection('users').doc(user.uid).update({
                 userName: nombre,
                 tel: telefono
               }).then(()=> historial.push('/profile'))
              
            }
          })
        }
    }

    return(
        <>
         <div className="modal-body container ">
              <Form onSubmit={setProfile} className="rounded bg-dark row d-flex justify-content-center ">
                  <Form.Group className="col-8 m-2" controlId="formBasicName">
                  <h4>Actualizar Datos </h4>
                  <Form.Label><h3>Cambiar Nombre</h3></Form.Label>

                    <Form.Control onChange={(e)=>{setNombre(e.target.value)}} type="name" placeholder={viejoNombre} value={nombre}/>
                  </Form.Group>
                  
                  <Form.Group className="col-8 m-2" controlId="formBasicTel">
                    <Form.Label><h3>Cambiar Telefono</h3></Form.Label>
                    <Form.Control onChange={(e)=>{setTelefono(e.target.value)}} type="phone" placeholder={viejoTelefono} value={telefono}/>
                  </Form.Group>
                    <input value="Enviar" className="col-8 btn btn-primary m-2" type="submit"/>
               
                    {error ?(<div>{error}</div>):(<span></span>)} </Form>
            </div>
        </>
    )

}

export default UpdateProfile;