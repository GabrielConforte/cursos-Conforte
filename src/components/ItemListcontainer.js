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
                }, 3000)
            }
            setCurso([])
            data([])
        },[]);

return(
    <div>
        {curso.length > 0 ? <ItemList curso={curso}></ItemList> :
            <h2>CARGANDO</h2>}
    </div>
)
}catch(e){
    console.log(e)
}
   
}

export default ItemListcontainer;

/* 
            const data = async () => {
                const response = await fetch('https://60e3b3496c365a0017839363.mockapi.io/cursos/conforte/Cursos');
               
                const data = response.json
                console.log(data)
                setTimeout(() => {
                    const aux = data.map((item) => {
                        return {
                            id: item.id,
                            img: item.imagen,
                            tittle: item.tittle,
                            text: item.text
                        };
                    });
                    setCurso(aux);
                }, 3000)
            }
            setCurso([])
            data([])
        },[]);*/