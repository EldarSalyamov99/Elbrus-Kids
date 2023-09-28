import React from 'react'
import Card from 'react-bootstrap/Card';

export default function ParentsBaner(): JSX.Element {
  return (
    <Card style={{ height: '35vw', backgroundImage: 'url(https://catherineasquithgallery.com/uploads/posts/2021-02/1612738791_163-p-fon-sero-belo-goluboi-196.png)', backgroundSize: 'cover',}}>
    <Card.Header style={{fontSize: '2vw',}}><h1 style={{marginTop: '25px' ,marginLeft: '50px'}}>Блог для родителей</h1></Card.Header>
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p>
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.{' '}
        </p>
      </blockquote>
    </Card.Body>
  </Card>
  )
}
