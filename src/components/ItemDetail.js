import React, {useContext, useState} from 'react';
import { Card } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import {CartContext } from "../context/cartContext"

const ItemDetail = (item) => {

const context = useContext(CartContext)
const cart = context.cartData
const [qAdd, setQadd] = useState(0)
const { imagen, titulo, texto, price, id, stock } = item
const [st, setSt] = useState(stock)

function onAdd(e){
    setQadd(e)
    
    let aux = st - e

    let counter = context.count + e 
    setSt(aux)
    context.setCount(counter)

    const createItem = {
        titulo: titulo,
        imagen: imagen,
        price: price,
        cantidad: e,
        id: id,
        stock: stock
    }
    
    if(cart.length===0){
        context.setCartData([createItem])
        }else{
            let a = cart.find((i) => i.id === createItem.id)
            if(a===undefined){
                context.setCartData([...cart, createItem])
            }else{
                let ind = cart.indexOf(a)
                cart[ind].cantidad+=e
            }
        }
    }

    return(
        <>
            <div className="container mt-2">
                
            <Card >
                <div className="row">
                <div className="col-12 col-lg-6">
                <Card.Img  src={imagen}/>
               
                     
                </div>
                <div className="col-12 col-lg-6">
                    <Card.Body>
                            <Card.Title>{titulo}</Card.Title>
                            <Card.Text><b>${price} + iva</b></Card.Text>
                            <Card.Text>{texto}</Card.Text>
                            {qAdd > 0 ?
                            <Link to='/cart'>
                                <button id="compra" className="m-1 btn btn-primary sm">COMPRAR</button>
                            </Link>:
                                <ItemCount stock={st} onAdd={onAdd}/>}
                    </Card.Body>
                </div></div>
            </Card>
            <div>
                <Card className="mt-2 col-12">
                    <Card.Body>
                        <Card.Title>Mas Info</Card.Title>
                        <Card.Text>
                            {texto}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </div>
            
            </>
        );

    } 
export default ItemDetail;