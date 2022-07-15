import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCard(props) {

  return(
      <Card style={{ height: '22rem', width: '16rem', padding: '2%' }}>
        <Card.Img
          style={{ height: '10rem', width: '10rem' }}
          variant="top"
          src= {props.imageURL}
        />
          <Card.Body>
            <Card.Title style= {{ fontSize: '15px' }}>{props.title}</Card.Title>
            <Card.Subtitle style={{ paddingBottom: '10%' }}><b>{props.price}</b></Card.Subtitle>
            <Button as='a' href={props.id} variant='dark'>Details</Button>
          </Card.Body>
      </Card>
  )
}

export default ItemCard;
