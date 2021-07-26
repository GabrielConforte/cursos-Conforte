import React from "react";
import { Form, Button } from 'react-bootstrap';

function Checkout() {
    
  return (<div className="modal-body container "><Form className="rounded bg-dark row d-flex justify-content-center ">

    <Form.Group className="col-8 m-2" controlId="formBasicName">
          <Form.Label><h4>Nombre</h4></Form.Label>
          <Form.Control type="name" placeholder="Ingrese nombre" />
    </Form.Group>

    <Form.Group className="col-8 m-2" controlId="formBasicEmail">
      <Form.Label><h4>Direccion de Email</h4></Form.Label>
      <Form.Control type="email" placeholder="Ingrese email" />
    </Form.Group>
  
    <Form.Group className="col-8 m-2" controlId="formBasicTel">
      <Form.Label><h4>Telefono</h4></Form.Label>
      <Form.Control type="phone" placeholder="Telefono" />
    </Form.Group>

    <Button className="col-8 btn btn-primary m-2" type="submit">
      Enviar Solicitud
    </Button>
  </Form>
  
  </div>);
}

export default Checkout;