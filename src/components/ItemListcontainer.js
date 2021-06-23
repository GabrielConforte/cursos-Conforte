import React from 'react';
import ItemList from './ItemList';

function Itemlistcontainer(greeting){
    console.log('props', greeting);


    return(
        <>
        <div className="container"><ItemList/></div>
        </>
    )

}

export default Itemlistcontainer;