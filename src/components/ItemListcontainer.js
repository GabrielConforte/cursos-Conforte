import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import db from '../firebase/index'
import {useParams} from 'react-router-dom';

function ItemListcontainer(){
    const [curso, setCurso] = useState([]);
    const [loading, setLoading] = useState(true)
    let b = useParams()
    b = b.categoria
        useEffect(() => {
            setTimeout(() => {
            
                const itemCollection = db.collection('items')
                let item = undefined;
                if(b!==undefined){
                    item = itemCollection.where('categoria','==',b)
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
                                    image:doc.data().image}}))
                    }
                }).catch(error => {console.log("error", error)
                }).finally(()=>{setLoading(false)})}, 1500)
            },[b]);
return(
    <div>
        {loading === false ? <ItemList curso={curso}></ItemList> :
           <div className="container"><div className="row">

            <div className="progress m-2 App-body col"></div>
            <div className="progress m-2 App-body col"></div>

           </div>

            <div className="row">

            <div className="progress m-2 App-body col"></div>
            <div className="progress m-2 App-body col"></div>

            </div></div>
         }
    </div>
)

   
}

export default ItemListcontainer;

/*

Asi estaba funcionando

import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {getData} from './getItems'
import {useParams} from 'react-router-dom';

function ItemListcontainer(){
   
    const [curso, setCurso] = useState([]);
    let a = useParams()
    a = a.categoria
        useEffect(() => {
            
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
                }, 1000)
            }
            setCurso([])
            data([])
        },[a]);

return(
    <div>{console.log(curso)}
        {curso.length > 0 ? <ItemList curso={curso}></ItemList> :
           <div className="container"><div className="row">

            <div className="progress m-2 App-body col"></div>
            <div className="progress m-2 App-body col"></div>

           </div>

            <div className="row">

            <div className="progress m-2 App-body col"></div>
            <div className="progress m-2 App-body col"></div>

            </div></div>
         }
    </div>
)

   
}

export default ItemListcontainer;


////

import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import db from '../firebase/index'
import {useParams} from 'react-router-dom';

function ItemListcontainer(){
   
    const [aux, setAux] = useState([])
    const [curso, setCurso] = useState([]);
    let a = useParams()
    a = a.categoria
        useEffect(() => {
            db.collection('items').get().then((snapShots)=>{
                setCurso({
                    items:snapShots.docs.map(doc =>{
                        console.log(doc.data().categoria)
                        return {id:doc.id,categoria:doc.data().categoria}})
                    
                })
            })
        },[]);

return(
    <div>{console.log(curso.items)}
        {curso.length > 0 ? <ItemList curso={curso.items}></ItemList> :
           <div className="container"><div className="row">

            <div className="progress m-2 App-body col"></div>
            <div className="progress m-2 App-body col"></div>

           </div>

            <div className="row">

            <div className="progress m-2 App-body col"></div>
            <div className="progress m-2 App-body col"></div>

            </div></div>
         }
    </div>
)

   
}

export default ItemListcontainer;

////////

itemCollection.get().then((querySnapshot) => {
    if(querySnapshot.size === 0){
        console.log("no resultado")
    }else{
        setCurso(querySnapshot.docs.map(doc => {
               return {
                                id:doc.id,
                                categoria:doc.data().categoria,
                                tittle:doc.data().tittle,
                                text:doc.data().text,
                                image:doc.data().image}}))
    }
}).catch(error => {console.log("error", error)
}).finally(()=>{setLoading(falase)})


*/