import React, {useState, useEffect} from 'react';
import ItemDetailsContainer from './ItemDetailsContainer';

const referensData = [
    {
       name: 'Java',
       id: 1,
       text: "Aprende java, esta bueno",
       imagen: "https://picsum.photos/200/200"
    },
    {
        name:'Python',
        id: 2,
        text: "Aprende python, esta bueno",
        imagen: "https://picsum.photos/200/200"
    },
    {
        name:'JavaScript',
        id: 3,
        text: "Aprende JavaScript, esta bueno",
        imagen: "https://picsum.photos/200/200"
        
    },
]
console.log(referensData)

function ItemList(){

    const [referens, setReferences] = useState([]);

    useEffect(() => { 
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
}

export default ItemList;