import React from "react";
import ItemListcontainer from "../components/ItemListcontainer";

function SelfImp() 
  {

    const a = 'selfimp'
  
    return (
        <div className="App-body">
  
  <ItemListcontainer item={a}></ItemListcontainer>   
  
        </div>
  
    );
  }

export default SelfImp;