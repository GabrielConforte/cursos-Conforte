import React from "react";
import ItemDetail from './ItemDetail'
import { Card } from 'react-bootstrap'

function ItemDetailsContainer() {
  return (
    <>
    <Card>
    <ItemDetail></ItemDetail>
    </Card>
    </>
  );
}

export default ItemDetailsContainer;