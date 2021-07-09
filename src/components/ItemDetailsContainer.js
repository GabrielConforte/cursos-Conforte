import React, { useEffect, useState } from 'react';
import {getDataID} from './getItems'
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

function ItemDetailsContainer(){

  const [curso, setCurso] = useState([]);
    
    const id = useParams()
    console.log(id)

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