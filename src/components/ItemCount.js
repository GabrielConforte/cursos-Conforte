import React, { useState } from 'react';

const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState(initial);
    const [contar, setStock] = useState(stock);

    const addCount = () => {
        if( count < contar){
            setCount(count +1);
        }
    }

    const lessCount = () =>{
        if(count > 0){
            setCount(count -1)
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
            <button onClick={(lessCount)}>-</button>
            <button onClick={(onAdd)}>Agregar al Carrito</button></div>
            
        </div>
    )
}

export default ItemCount;