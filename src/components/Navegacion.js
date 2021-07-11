/////

import React from 'react'
import CartWidget from './CartWidget'
import { Navbar, Nav, Container } from 'react-bootstrap';



function Navegacion(){
    return (
      <>
          <Navbar collapseOnSelect expand='sm' bg='dark' variant="dark">
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/programing">Programacion</Nav.Link>
                    <Nav.Link href="/design">Diseño</Nav.Link>
                    <Nav.Link href="/marketing">Marketing</Nav.Link>
                    <Nav.Link href="/selfimp">Desarrollo Personal</Nav.Link>
                    <Nav.Link href="/cart"><CartWidget/></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>

          </Navbar>
      
      </>

      );
}

export default Navegacion;

//esoss navs sonde bootstrap