/////

import React, { useContext, useEffect, useState } from 'react'
import {CartContext } from "../context/cartContext"
import CartWidget from './CartWidget'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import db, { auth } from '../firebase/index';
import {useHistory} from 'react-router-dom';


function Navegacion(){

  const historial = useHistory();
  const context = useContext(CartContext)
  const [usuario, setUsuario] = useState(null)
  const [userName, setUserName] = useState('')
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        db.collection('users').doc(user.uid).get()
        .then(doc => setUserName(doc.data().userName))
        setUsuario(user.email)
       
      }
    })
  },[])

  const CerrarSesion = () =>{
    auth.signOut()
    setUsuario(null)
    historial.push('/')
  }

  let a = context.cartData.length

    return (
      <>
          <Navbar collapseOnSelect expand='sm' bg='dark' variant="dark">
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse className="mr-auto" id='responsive-navbar-nav '>
                  <Nav>
                    <Link className="nav-link"  to="/"> Home </Link>
                    <Link className="nav-link" to="/programing"> Programacion </Link>
                    <Link className="nav-link" to="/design"> Diseño </Link>
                    <Link className="nav-link" to="/marketing"> Marketing </Link>
                    <Link className="nav-link" to="/selfimp"> Autodesarrollo </Link>
                    
                  </Nav></Navbar.Collapse>
                  <div className="d-flex justify-content-end">
                   { usuario ?
                      <div>Hola {userName}! <button className="btn btn-sm bg-primary rounded mx-1" onClick={CerrarSesion}>Cerrar sesion</button> </div>
                      :
                      <> <Link className="btn btn-sm bg-info rounded mx-1" to="/login">Ingresar</Link>
                    <Link className="btn btn-sm bg-info rounded mx-1" to="/signin">Crear User</Link></>
                    }{ a>0 ? <Link className="mx-1" to="/cart"><CartWidget/> </Link> : <></> }</div>
                
            </Container>
 
                   
                   
                    
          </Navbar>
      
      </>

      );
}

export default Navegacion;

//esoss navs sonde bootstrap