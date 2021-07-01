import { promises } from 'node:fs';
import React, {useState, useEffect} from 'react';

const productDetail = {
    name: Python
}

function itemDetail(){
    const [detailProduct, setDetailProduct] = useState ({})

    useEffect(()=>{

        promises((resolve, reject) =>{
            setTeimeout(() => resolve(),2000)
        }).then ((res) => setDetailProduct(res))

    }, [])

    return(
        <div>
            {detailProduct.name}
            {data}
        </div>
    )

} 

