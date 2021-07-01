import React from 'react';
import ItemList from './ItemList';

function ItemListcontainer(greeting){
    console.log('props', greeting);


    return(
        <div>
        <div className="container"><ItemList/></div>
        </div>
    )

}

export default ItemListcontainer;