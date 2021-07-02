
import React, {useState, useEffect} from 'react';
import { Card } from 'react-bootstrap'

const productDetail = {
    id: 1,
    name: "Python",
    description: "lorem ipsum, more",
    image: "https://picsum.photos/200/300"
}

function ItemDetail(){
    const [detailProduct, setDetailProduct] = useState ({})

    useEffect(()=>{

        new Promise((resolve, reject) =>{
            setTimeout(() => resolve(),2000)
        }).then ((res) => setDetailProduct(res))

    }, [])

    return(
        <div>
            <Card.Img>{detailProduct.image}</Card.Img>
            <Card.Body>
            <Card.Title>{detailProduct.name}</Card.Title>
            <Card.Text>{detailProduct.description}</Card.Text>
            </Card.Body>
        </div>
    )

} 


export default ItemDetail;
