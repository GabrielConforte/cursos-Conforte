/////

import React, { useContext } from 'react'
import {CartContext } from "../context/cartContext"
import CartWidget from './CartWidget'
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
 Link
} from "react-router-dom";



function Navegacion(){

  const context = useContext(CartContext)

  let a = context.cartData.length

    return (
      <>
          <Navbar collapseOnSelect expand='sm' bg='dark' variant="dark">
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav>
                    <Link className="nav-link"  to="/"> Home </Link>
                    <Link className="nav-link" to="/programing"> Programacion </Link>
                    <Link className="nav-link" to="/design"> Diseño </Link>
                    <Link className="nav-link" to="/marketing"> Marketing </Link>
                    <Link className="nav-link" to="/selfimp"> Desarrollo Personal </Link>
                    { a>0 ? <Link className="nav-link" to="/cart"><CartWidget/> </Link> : <></> }
                  </Nav>
                </Navbar.Collapse>
            </Container>

          </Navbar>
      
      </>

      );
}

export default Navegacion;

//esoss navs sonde bootstrap