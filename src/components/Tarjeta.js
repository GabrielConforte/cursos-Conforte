import React from 'react';
import { Card, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";

const Tarjeta = ({ img, tittle, id, price }) => {


    return (
        <div className="m-2">
            <Card>
                <Card.Img className="imagen" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{tittle}</Card.Title>
                    <Card.Text>${price}</Card.Text>
                    <Link to={`/item/${id}`}>
                        <Button variant="primary">Detalle</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Tarjeta;
