import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
//import {getData} from './getItems'
import {useParams} from 'react-router-dom';

function ItemListcontainer(){
   
    const [curso, setCurso] = useState([]);

    const { categoryId } = useParams();

    async function getDatos(){

      return fetch('https://60e3b3496c365a0017839363.mockapi.io/cursos/conforte/Cursos').then(response => response.json())
            .catch( e => console.log(e))

    }

        useEffect(() => {
            const data = getDatos()
            const listaCursos = new Promise((resolve)=>{
                if(categoryId){
                    const filtrado = data.filter(i => i.categoria === categoryId)
                    resolve(filtrado)
                    
                }else{
                    resolve(data)
                }
            });
            listaCursos.then(result => setCurso(result))
        }, [categoryId])

return(
    <div>
        {curso.length > 0 ? <ItemList curso={curso}></ItemList> :
            <h2><img className="img-fluid"alt="loading" src="https://cdn.dribbble.com/users/563824/screenshots/3633228/untitled-5.gif"></img></h2>}
    </div>
)

   
}

export default ItemListcontainer;

/*const ItemListContainer = () =>{

const [list, setList] = useState([]);

const { categoryId } = useParams();



useEffect(() => {

	const listProducts = new Promise ((resolve) =>

		if(categoryId){

		const dataFilter = products.filter(product =>product.category === categoryId);

		}

		resolve(dataFilter);

		}else {

		resolve(data)

		});

	listProducts.then(result => setList(result));

}, [categoryId])



return(

<ItemList list={list} /> )}


/////getitems

export async function getData(a) {
    const response = await fetch('https://60e3b3496c365a0017839363.mockapi.io/cursos/conforte/Cursos')
    let data = await response.json()
    if(a === undefined){
        
        return data;
        
    } else{
        data = data.filter((i) => i.categoria === a)
        return data;
    }

//////como estaba

    let a = useParams()
    a = a.categoria
        useEffect(() => {
            const data = async () => {
                const data = await getDatos();
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
    <div>
        {curso.length > 0 ? <ItemList curso={curso}></ItemList> :
            <h2><img className="img-fluid"alt="loading" src="https://cdn.dribbble.com/users/563824/screenshots/3633228/untitled-5.gif"></img></h2>}
    </div>
)

   
}


*/ 