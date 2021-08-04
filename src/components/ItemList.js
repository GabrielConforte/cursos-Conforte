
import Tarjeta from './Tarjeta'

function ItemList(curso){

    return(
        
            <div className="container">
                <div className="row">
                    {curso.curso.map((item, index) => {
                    return(
                    <div className="col-sm-12 col-lg-6" key={index}>
                        <Tarjeta img={item.image} tittle={item.tittle} price={item.price} id={item.id}/>
                    </div>
                            )
                        })}
                </div>
            </div>
    )
}

export default ItemList;
