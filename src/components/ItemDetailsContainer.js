import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import db from '../firebase/index'

function ItemDetailsContainer(){
  const [curso, setCurso] = useState([]);
    
  let b = useParams()
      useEffect(() => {
          setTimeout(() => {
           
              let item = db.collection('items').where('id','==',b)
              console.log(item)
              item.get().then((querySnapshot) => {
                      setCurso(querySnapshot.docs.map(doc => {
                             return {
                                  id:doc.id,
                                  categoria:doc.data().categoria,
                                  tittle:doc.data().tittle,
                                  text:doc.data().text,
                                  image:doc.data().image}}))
                  
              }).catch(error => {console.log("error", error)
              }).finally(()=>{})}, 1500)
          },[b]);
       
      
      return(
        <div>{console.log(curso)}
          {

           <ItemDetail imagen={curso.image} titulo={curso.tittle} texto={curso.text} price={curso.price} id={curso.id}></ItemDetail>
            
          }
        </div>
      )
}

export default ItemDetailsContainer;