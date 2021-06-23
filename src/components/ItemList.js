import React, {useState, useEffect} from 'react';
import Card from './Card';

const referensData = [
    {
        name: {
            course: 'React',
        }
    },
    {
        name: {
            course: 'Python',
        }
    },
    {
        name: {
            course: 'JavaScript',
        }
    },
]


function ItemList(){

    const [referens, setReferences] = useState([]);

    const buttonFunction = () => {
        alert('Hace algo')
    }

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
        <div className="row justify-content-center">
          {referens.map((item, key) => 
                <Card {...item} buttonFunction={buttonFunction} />)}  
        </div>
    )
}

export default ItemList;