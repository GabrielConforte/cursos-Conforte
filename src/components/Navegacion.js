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
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/Programing">Programacion</Nav.Link>
                    <Nav.Link href="/Desing">Diseño</Nav.Link>
                    <Nav.Link href="/Marketing">Marketing</Nav.Link>
                    <Nav.Link href="/SelfImp">Desarrollo Personal</Nav.Link>
                    <Nav.Link href="/Cart"><CartWidget/></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>

          </Navbar>
      
      </>

      );
}

export default Navegacion;

