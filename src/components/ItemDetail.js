import React from 'react';
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'

const ItemDetail = (item) => {

const {imagen, titulo, texto} = item

    return(
        <div>
            <Card className="col-4">
                <Card.Img src={imagen}/>
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>{texto}</Card.Text>
                    <button className="btn btn-primary sm">COMPRA YA!</button>
                    <ItemCount stock={10} initial={0}></ItemCount>
                </Card.Body>
            </Card>

          
        </div>
    );

} 


export default ItemDetail;

/*   

    const getDetailProduct = async () => {
        const response = await fetch("https://60df53e6abbdd9001722d380.mockapi.io/api/1/");
        const data = await response.json();
        console.log(data.results)
        setDetailProduct(data.results);
      };

    useEffect(()=>{

       getDetailProduct();

    }, [])

    console.log("detailProduct", detailProduct) */