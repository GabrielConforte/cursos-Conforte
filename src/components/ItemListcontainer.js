import React from 'react';

function Itemlistcontainer(greeting){
    console.log('props', greeting);


    return(
        <>
       
        <ul>
            <li>
                 <h1>greeting</h1>
            </li>
        </ul>
        </>
    )

}

export default Itemlistcontainer;