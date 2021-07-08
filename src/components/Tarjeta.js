import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Switch, Router, Link} from 'react-router-dom'
import ItemDetailsContainer from './ItemDetailsContainer';

const Tarjeta = ({ img, tittle, id, price }) => {

    function carritoAnuncio() {
        alert("Agregado");
    }

 
    return (
        < >
        <Switch>
            <Card>
                <Card.Img className="imagen" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{tittle}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                    <Button variant="primary" onClick={carritoAnuncio}>Agregar al Carrito</Button>
                    <Link to="/ItenDetailsContainer">
                    <Button variant="secondary">
                            Detalles
                    </Button>
                    </Link>
                </Card.Body>
            </Card>
        </Switch>
        </>
    )
}

export default Tarjeta;