import React from "react";
import ItemDetail from './ItemDetail'

function ItemDetailsContainer(item) {

  const {imagen, titulo, texto} = item

  return (
    <><div className="m-5 p-5">
        <div className="row"><ItemDetail imagen={imagen} titulo={titulo} texto={texto}></ItemDetail></div>
      </div>
      </>
  );
}

export default ItemDetailsContainer;