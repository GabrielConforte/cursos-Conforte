import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import db from '../firebase/index'
import {useParams} from 'react-router-dom';

function ItemDetailsContainer(){
  const [curso, setCurso] = useState();
  const [loading, setLoading] = useState([])
  const [error, setError] = useState(false)
    const { id } = useParams()
    
    useEffect(() => {
      setTimeout(() => {
          const itemCollection = db.collection('items')
          let item = undefined;
          
          if(id!==undefined){
              item = itemCollection.where('id','==',id)
              
          }else{
              item = itemCollection
          }
          
          item.get().then((querySnapshot) => {
              if(querySnapshot.size === 0){
                  setError(true)
              }else{
                  setCurso(querySnapshot.docs.map(doc => {
                         return {
                              id:doc.id,
                              categoria:doc.data().categoria,
                              tittle:doc.data().tittle,
                              text:doc.data().text,
                              image:doc.data().image,
                              price:doc.data().price,
                            stock:doc.data().stock}}))
              }
          })
          .catch(error => {console.log("error", error)})
          .finally(()=>{setLoading(false)})}, 1500)
      },[id]);
       
      
      return(
        <div>
          {error === true ? <div className="App-body"><div>  <h1>404</h1> <h2>¯\_(ツ)_/¯</h2><p>no existe</p> </div> </div> :<> {
          loading === false ?
          <ItemDetail imagen={curso[0].image} titulo={curso[0].tittle} texto={curso[0].text} price={curso[0].price} id={curso[0].id} stock={curso[0].stock}></ItemDetail> :
          <div className="container">
            <div className="row">
              <div className="progress m-2 App-body"></div>
            </div>
          </div>
          }</>}
        </div>
      )
}

export default ItemDetailsContainer;