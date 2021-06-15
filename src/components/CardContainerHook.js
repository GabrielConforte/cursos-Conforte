import React from 'react';

function CardContainer(){
    const [referens, setReferences] = useState(referensData);

    return(
        <div>
            Container Card
            {referens.map((item,key) => 
            <Card {...item} buttonFunction={this.buttonFunction}></Card>)}

            <button onClick={this.addNewCard}>Agregar Card</button>
        </div>
    )


}