/////
import React from 'react'
import CartWidget from './CartWidget'
import { Navbar, Nav, Container } from 'react-bootstrap';

function Navegacion(){
    return (
      <>
          <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant="dark">
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                  <Nav>
                    <Nav.Link href="/Home">Home</Nav.Link>
                    <Nav.Link href="/Category">Category</Nav.Link>
                    <Nav.Link href="/Products">Product</Nav.Link>
                    <Nav.Link href="/Checkout">Checkout</Nav.Link>
                    <Nav.Link href="/Cart"><CartWidget/></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>

          </Navbar>
      
      </>

      );
}

export default Navegacion;

/*

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>

 <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link  class="nav-link active" to="/Home">Home</Link>
            <Link  class="nav-link active" to="/Category">Category</Link>
            <Link  class="nav-link active" to="/Products">Products</Link>
            <Link class="nav-link active" to="/Checkout">Checkout</Link>
          </div>
        </div>
      </div>
    </nav>
*/ 