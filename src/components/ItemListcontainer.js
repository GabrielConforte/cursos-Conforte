import React from 'react';
import ItemList from './ItemList';

function ItemListcontainer(greeting){
    console.log('props', greeting);


    return(
        <div className="row"><ItemList/>
        </div>
    )

}

export default ItemListcontainer;