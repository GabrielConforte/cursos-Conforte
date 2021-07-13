import { useState } from 'react'

const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)
    // funcionamiento de los botones
    function increment() {
        
        let newCantidad = parseInt(cantidad) +1
        setCantidad(newCantidad)
    }
    function decrement() {
        let newCantidad = parseInt(cantidad) -1
        setCantidad(newCantidad)
    }
    
    // vista
    return(
        <div>
            <div>
                <button
                onClick={() => decrement()}
                disabled={cantidad<=initial}>-</button>
                {cantidad}
                <button
                onClick={() => increment()}
                disabled={cantidad>=stock}>+</button>
                <button className="m-1"type="submit" onClick={() => onAdd(cantidad)} value={cantidad}>Agregar al Carrito</button>
            </div>
           
        </div>
    )
}
export default ItemCount