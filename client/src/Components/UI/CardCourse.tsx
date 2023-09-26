import React from 'react'
import { Button, Card, Row } from 'react-bootstrap';

export default function CardCourse({theme}): JSX.Element {
  return (
    <Card style={{ width: '18rem', margin: '10px', }}>

      <Card.Img variant="top" src="https://avatars.mds.yandex.net/i?id=6e3075ff45eb41987bd41ad078f1b94c_sr-4120277-images-thumbs&n=13" />
      <Card.Body>
        <Card.Title>{theme}</Card.Title>
        <Card.Text>
          Тут будет описание курса
        </Card.Text>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button style={{backgroundColor: '#ff890a', color: 'black', border: 'none'}}>Учиться</Button>
        </div>
      </Card.Body>

    </Card>
  )
}
