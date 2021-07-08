import React, { useEffect, useState } from 'react';
import {getDataID} from './getItems'
import ItemDetail from './ItemDetail';

function ItemDetailsContainer(id){

  const [curso, setCurso] = useState([]);
  

     useEffect(() => {
          const data = async () => {
              const sata = await getDataID(id); 
              setCurso(sata)
              
          }
          data([])
      },[]);
       
return(
  <div>
    {

  <ItemDetail imagen={curso.image} titulo={curso.tittle} texto={curso.text}></ItemDetail>
      
    }
  </div>
)
}

export default ItemDetailsContainer;

/*useEffect(() => { 
        new Promise((resolve, reject) => {
            setTimeout(resolve(referensData), 3000)
        }).then(
            function (referenceResolve){
                setReferences(referenceResolve)
            }
        ) 
    }, []) // componentDidMount
    return(
            <div className="row">
              {referens.map((items) => (
                <div className="col-4" key={items.id}>
                    <ItemDetailsContainer 
                        imagen={items.imagen}
                        titulo={items.name}
                        texto={items.text}>
                    </ItemDetailsContainer></div>
              ))}
            </div>
    )
}*/