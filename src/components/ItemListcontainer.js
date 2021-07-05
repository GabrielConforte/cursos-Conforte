import React from 'react';
import ItemList from './ItemList';

function ItemListcontainer(greeting){
    console.log('props', greeting);


    return(
        <div>
            <h3>Cursos Disponibles</h3>
            <ItemList/>
        </div>
    )

}

export default ItemListcontainer;