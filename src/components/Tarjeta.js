import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Tarjeta = ({ img, tittle, id, price }) => {

    function carritoAnuncio() {
        alert("Agregado");
    }

    return (
        <>
            <Card>
                <Card.Img className="imagen" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{tittle}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <Button variant="primary" onClick={carritoAnuncio}>Agregar al Carrito</Button>
                    <Button variant="secondary" as={Link} to={`/item/${id}`}>Detalle</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Tarjeta;