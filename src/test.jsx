import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Example = (props) => {
  const arr=[1,2,3,4,5,6,7,8]
  return (
    <ListGroup>
       {arr.map(item=>{
         return <ListGroupItem disabled tag="a" href="#">AAACras justo odio</ListGroupItem>
       })}
      {/* <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
      <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
      <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
      <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem> */}
    </ListGroup>
  );
}

export default Example;

