/////
import React from 'react'
import CartWidget from './CartWidget'



function NavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Navegacion</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapsed" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" >Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Listas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">acerca de</a>
        </li>
        <li>
        <CartWidget/>
        </li>
      </ul>
    </div>
  </div>
</nav>



      );
}

export default NavBar;

/**/ 