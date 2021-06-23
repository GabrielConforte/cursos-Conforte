import React from 'react';
import Item from './Item';

function Card({name, buttonFunction, children}){
    return (
        <div className="col-4 m-3 text-center" style={{border: '1px solid black', width: '200px', height: '100px'}}>
            <Item {...name}/>
            <button onClick={buttonFunction}>Mock</button>
            {children}
        </div>
    )
}

export default Card
