import React, {useContext, useState} from 'react';
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from './cartContext';

const ItemDetail = (item) => {

const context = useContext(CartContext)
const cart = context.cartData
const [qAdd, setQadd] = useState(0)
const [st, setSt] = useState(10)//esto despues deberia agregarlo al context para uqe no se reinicie cada rato

const {imagen, titulo, texto, price, id} = item

function onAdd(e){
    setQadd(e)
    
    let aux2 = st - e
    setSt(aux2)
   
    console.log("el stock es " + aux2) 

    const createItem = {
        titulo: titulo,
        imagen: imagen,
        price: price,
        cantidad: e,
        id: id
    }
    
    if(cart.length===0){
        context.setCartData([createItem])
    }else{
       let a = cart.find((i) => i.id === createItem.id)
       if(a===undefined){context.setCartData([...cart, createItem])
    }else{
        alert("Ya esta en el carrito")
    }
        
        }
   
}

    return(
        <div>
            <div className="container m-2">
                <div className="row d-flex justify-content-center">
                    
                    <Card className="col-sm-6 m-1">
                            <Card.Body>
                                <Card.Img src={imagen}/>
                            </Card.Body>
                    </Card>

                    <Card className="col-sm-6 m-1">
                            <Card.Body>
                                <Card.Title>{titulo}</Card.Title>
                                <Card.Text>{texto}</Card.Text>

                                {qAdd > 0 ?  <Link to='/cart'><button id="compra" className="m-1 btn btn-primary sm">COMPRAR</button></Link> : <div><ItemCount stock={st} onAdd={onAdd}/> </div>}

                            </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );

} 
//
//setFruits([...fruits, 'Manzana'])
//setFruits(fruits.concat('Manzana'))
export default ItemDetail;