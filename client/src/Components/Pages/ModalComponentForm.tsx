import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function ModalComponentForm(): JSX.Element {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Сохранить изменения
      </Button>
    </Form>
  )
}
