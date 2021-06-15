import React from 'React';
import Card from './Card'

class CardContainer extends React.Component{
//fon = muta la data
state = {
    referens: referensData,
}

buttonFunction = () =>{
    alert('Esta funcion desde el padre')
}


addNewCard = () =>{
    const newReference = {
        massage: 'lorem',
        user: {
            name: 'nicolas',
            course: 'desarrollo',
            photo: 'https://picsum.photos/id/237/200/300'
        },

    }
        this.setState({
            referens: [... this.state.referens, newReference]
    })
}


render (){

    return(
        <div>
            Container Card
            {this.state.referens.map((item,key) => 
            <Card {...item} buttonFunction={this.buttonFunction}></Card>)}

            <button onClick={this.addNewCard}>Agregar Card</button>
        </div>
    )

}

}

export default CardContainer;