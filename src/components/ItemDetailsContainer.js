import React from "react";
import ItemDetail from './ItemDetail'

function ItemDetailsContainer(item) {

  const {imagen, titulo, texto} = item

  return (
        <ItemDetail imagen={imagen} titulo={titulo} texto={texto}></ItemDetail>
  );
}

export default ItemDetailsContainer;