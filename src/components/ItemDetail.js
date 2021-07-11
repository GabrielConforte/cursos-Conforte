import React from 'react';
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'

const ItemDetail = (item) => {

const {imagen, titulo, texto} = item

    return(
        <div>
            <div className="container ">
                <div className="row">
                    
                    <Card className="col-sm-6">
                            <Card.Body>
                                <Card.Img src={imagen}/>
                            </Card.Body>
                    </Card>
                    <Card className="col-sm-6">
                            <Card.Body>
                                <Card.Title>{titulo}</Card.Title>
                                <Card.Text>{texto}</Card.Text>
                                <button className="btn btn-primary sm">COMPRA YA!</button>
                                <ItemCount stock={10} initial={0}></ItemCount>
                            </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );

} 


export default ItemDetail;