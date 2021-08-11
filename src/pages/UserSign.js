
import React, {useState} from "react";
import { Form } from 'react-bootstrap';
import db, {auth} from '../firebase/index';
import {useHistory} from 'react-router-dom';

function UserSign(){

    const historial = useHistory()
    const [usuario, setUsuario] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [comprobar, setComprobar] = useState('')
    const [telefono, setTelefono] = useState('')
    const [error, setError] = useState('')

    const registrarUser =(e)=>{
        e.preventDefault()
            if(comprobar===password){
            if(telefono.trim()){
                if(usuario.trim()){
            auth.createUserWithEmailAndPassword(email,password)
            .then(cred => {return db.collection('users').doc(cred.user.uid).set({
                userName: usuario,
                tel: telefono
            })})
            .then(r =>  historial.push('/'))
            .catch(e => {
                /*Auth/invalid-email */
            if(e.code === 'auth/invalid-email'){
                setError('Formato de email Incorrecto')
            }
            /*Auth/weak-password */
            if(e.code === 'auth/weak-password'){
                setError('Password demasiado debil, ingrese mas de 6 caracteres')
            }
            })
            }else{
            setError('Nombre de usuario no puede estar vacio')
            }
            }else{
                setError('Telefono no puede estar vacio')
            }
            }else{
                setError('Contraseña No coincide')
    }}

    return(
        <div className="App-Body p-2">
            
            <Form onSubmit={registrarUser} className="rounded bg-dark row d-flex justify-content-center ">

                <Form.Group className="col-8 m-2" controlId="formBasicUser">
                    <Form.Label><h4>Nombre Usuario</h4></Form.Label>
                    <Form.Control onChange={(e)=>setUsuario(e.target.value)}type="name" placeholder="Ingrese nombre de usuario" value={usuario}/>
                </Form.Group>

                <Form.Group className="col-8 m-2" controlId="formBasicTel">
                    <Form.Label><h4>Telefono</h4></Form.Label>
                    <Form.Control onChange={(e)=>{setTelefono(e.target.value)}} type="phone" placeholder="Telefono" value={telefono}/>
                </Form.Group>

                <Form.Group className="col-8 m-2" controlId="formBasicEmail">
                    <Form.Label><h4>Direccion de Email</h4></Form.Label>
                    <Form.Control onChange={(e)=>setEmail(e.target.value)}type="email" placeholder="Ingrese email" value={email}/>
                </Form.Group>

                <Form.Group className="col-8 m-2" controlId="formBasicPas">
                    <Form.Label><h4>Contraseña</h4></Form.Label>
                    <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Ingrese su contraseña" value={password} autoComplete="on"/>
                </Form.Group>
                <Form.Group className="col-8 m-2" controlId="formBasicPasComp">
                    <Form.Control onChange={(e)=>setComprobar(e.target.value)} type="password" placeholder="Ingrese nuevamente la contraseña" value={comprobar} autoComplete="on"/>
                </Form.Group>

                <input value="Ingresar" className="col-8 btn btn-primary m-2" type="submit"/>
                    {error?(<div>{error}</div>):(<span></span>)}
                </Form>
               
        </div>
    )
}

export default UserSign