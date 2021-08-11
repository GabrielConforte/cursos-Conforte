import React , { useState }from 'react'
import { Form } from 'react-bootstrap';
const UpdateProfile = () =>{
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [error, setError] = useState('')

    const setProfile = (e) =>{

        e.preventDefault()
    
        if(!telefono.trim()){
        setError('Telefono vacio')
        }

        if(!nombre.trim()){
        setError('Nombre vacio')
        }

    }

    return(
        <>
         <div className="modal-body container ">
              <Form onSubmit={setProfile} className="rounded bg-dark row d-flex justify-content-center ">
                  <Form.Group className="col-8 m-2" controlId="formBasicName">
                    <Form.Label><h4>Nombre</h4></Form.Label>
                    <Form.Control onChange={(e)=>{setNombre(e.target.value)}} type="name" placeholder="Ingrese nombre" value={nombre}/>
                  </Form.Group>
                  
                  <Form.Group className="col-8 m-2" controlId="formBasicTel">
                    <Form.Label><h4>Telefono</h4></Form.Label>
                    <Form.Control onChange={(e)=>{setTelefono(e.target.value)}} type="phone" placeholder="Telefono" value={telefono}/>
                  </Form.Group>
                    <input value="Enviar" className="col-8 btn btn-primary m-2" type="submit"/>
                </Form>
                    {error ?(<div>{error}</div>):(<span></span>)}
            </div>
        </>
    )

}

export default UpdateProfile;