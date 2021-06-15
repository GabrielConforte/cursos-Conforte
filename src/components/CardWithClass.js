import React from 'react';
import Contador from './Contador';

class CardWithClass extends React.Component{

    
        state = {
            contador: 1,
        }
    
            //metodos que extienden de React.Component
                //antes de que el componente se renderice
                componentWillMount(){

                }
                //se ejecuta al renderizar
                componentDidMount(){
                    console.log("Renderizado")
                  
                }
                //se ejecuta cuando se cambia el estado del componente
                componentDidUpdate(){
                    console.log('Actualizado')
                }
                //cuando el componente ya no es visible en el dom
                componentWillUnmount(){

                }
            sumar = () =>{
                this.setState({contador : this.state.contador +1})
            }
            restar = () =>{
                this.setState({contador : this.state.contador -1})
            }
        
    //metodo que renderiza a travez del dom
    render(){
       return(<div>
            <div>
                {this.state.contador}
                <Contador numero={this.state.contador}/>
            </div>
            <div>
                    <button onClick={this.sumar}>sumar</button>
            </div>
            <div>
                    <button onClick={this.restar}>restar</button>
            </div>
        </div>
    
) }
}

export default CardWithClass;