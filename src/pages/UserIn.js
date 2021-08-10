
import React, {useState} from "react";
import { Form } from 'react-bootstrap';
import {auth} from '../firebase/index';
import {useHistory} from 'react-router-dom';

function UserLog(){
    const historial = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const loginUsuario =(e)=>{
        e.preventDefault()
            auth.signInWithEmailAndPassword(email,password)
            .then(r => console.log(r))
            .then(() => historial.push('/'))
            .catch(e => {
                //auth/user-not-found
                if(e.code==="auth/user-not-found"){
                    setError("Usuario No Existe")
                }
                //"auth/wrong-password"
                if(e.code==="auth/wrong-password"){
                    setError("Contraseña incorrecta")
                }
                //auth/invalid-email
                if(e.code==="auth/invalid-email"){
                    setError("Email invalido")
                }
                }
                )
        }
    

    return(
        <div className="App-Body p-2">
            
            <Form onSubmit={loginUsuario} className="rounded bg-dark row d-flex justify-content-center ">
                  
                  <Form.Group className="col-8 m-2" controlId="formBasicEmail">
                    <Form.Label><h4>Direccion de Email</h4></Form.Label>
                    <Form.Control onChange={(e)=>setEmail(e.target.value)}type="email" placeholder="Ingrese email" value={email}/>
                  </Form.Group>

                  <Form.Group className="col-8 m-2" controlId="formBasicPas">
                    <Form.Label><h4>Contraseña</h4></Form.Label>
                    <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Ingrese su contraseña" value={password} autoComplete="on"/>
                  </Form.Group>

                    <input value="Ingresar" className="col-8 btn btn-primary m-2" type="submit"/>
                    {error?(<div>{error}</div>):(<span></span>)}
                </Form>
               
        </div>
    )
}

export default UserLog