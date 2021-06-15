import React from 'react';

function Contador(props){
    console.log('props', props);


    return(
        <>
        <h1>{props.numero}</h1>
        </>
    )

}

export default Contador;