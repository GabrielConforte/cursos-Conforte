import React, { useState } from 'react';

const ItemCount = ({stock, initial}) => {
    //logica

    const [count, setCount] = useState(initial);
    const [contar, setStock] = useState(stock);

    const addCount = () => {
        if( count < contar){
            setCount(count +1);
        }
    }

    const onAdd = () =>{
        setCount(0)
        setStock(contar-count)
    }

    return(
        <div>
           <div> <button onClick={(addCount)}>+</button>
            {count}
            <button onClick={() => setCount(count -1)}>-</button>
            <button onClick={(onAdd)}>Agregar al Carrito</button></div>
            
        </div>
    )
}

export default ItemCount;