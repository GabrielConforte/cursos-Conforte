import { useState } from 'react'

const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [cant, setCant] = useState(initial)
    let st = stock
    
    function addToCount() {
        let aux= parseInt(cant) +1
      setCant(aux)
    }

    function lessToCount() {
        let aux = parseInt(cant) -1
        setCant(aux)
    }

    
    return(
        <div>
            <div>
                <button className="btn btn-primary m-1"
                onClick={() => lessToCount()}
                disabled={cant<=initial}>-</button>
                {cant}
                <button className="btn btn-primary m-1"
                onClick={() => addToCount()}
                disabled={cant>=st}>+</button>
                <button className="btn btn-primary m-1" type="submit" onClick={() => onAdd(cant)} value={cant}>Agregar al Carrito</button>
            </div>
           
        </div>
    )
}
export default ItemCount
