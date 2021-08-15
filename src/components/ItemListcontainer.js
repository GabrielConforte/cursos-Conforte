import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import db from '../firebase/index';
import {useParams} from 'react-router-dom';

function ItemListcontainer(){
    const [curso, setCurso] = useState([]);
    const [loading, setLoading] = useState(true)
    let { categoria } = useParams()
        useEffect(() => {
                const itemCollection = db.collection('items')
                let item = undefined;
                if(categoria!==undefined){
                    item = itemCollection.where('categoria','==',categoria)
                }else{
                    item = itemCollection
                }
                
                item.get().then((querySnapshot) => {
                    if(querySnapshot.size === 0){
                        console.log("no resultado")
                    }else{
                        setCurso(querySnapshot.docs.map(doc => {
                               return {
                                    id:doc.id,
                                    categoria:doc.data().categoria,
                                    tittle:doc.data().tittle,
                                    text:doc.data().text,
                                    image:doc.data().image,
                                    price:doc.data().price}}))
                                        }
                            }).catch(error => {console.log("error", error)
                            }).finally(()=>{setLoading(false)})
                            },[categoria]);
                return(
                    <div>
                        {loading === false ?
                        <ItemList curso={curso}></ItemList> :
                        <div className="container">
                            <div className="row">
                                <div className="progress m-2 App-body col-12"></div>
                            </div> 
                        </div>
                        }
                    </div>
                )

                
                }

                export default ItemListcontainer;