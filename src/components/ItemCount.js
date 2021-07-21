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
                <button
                onClick={() => lessToCount()}
                disabled={cant<=initial}>-</button>
                {cant}
                <button
                onClick={() => addToCount()}
                disabled={cant>=st}>+</button>
                <button className="m-1"type="submit" onClick={() => onAdd(cant)} value={cant}>Agregar al Carrito</button>
            </div>
           
        </div>
    )
}
export default ItemCount
