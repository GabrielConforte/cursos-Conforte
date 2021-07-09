import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {getData} from './getItems'


function ItemListcontainer(a){

    const [curso, setCurso] = useState([]);
    

        try{ useEffect(() => {
            
            const data = async () => {
                const data = await getData(a);
                setTimeout(() => {
                    const aux = data.map((item) => {
                        return {
                            id: item.id,
                            img: item.image,
                            tittle: item.tittle,
                            text: item.text,
                            price: item.price
                        };
                    });
                    setCurso(aux);
                }, 2000)
            }
            setCurso([])
            data([])
        },[]);

return(
    <div>
        {curso.length > 0 ? <ItemList curso={curso}></ItemList> :
            <h2><img src="https://cdn.dribbble.com/users/563824/screenshots/3633228/untitled-5.gif"></img></h2>}
    </div>
)
}catch(e){
    console.log(e)
}
   
}

export default ItemListcontainer;