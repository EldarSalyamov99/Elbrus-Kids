import React, { useState } from 'react'
import { Button, Modal, Row, Col, Card } from 'react-bootstrap'

export default function BlogParents(): JSX.Element {
  const arr = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (): void => {
    setIsModalOpen(true)
  }

  const closeModal = (): void => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button onClick={openModal}>click</Button>

      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            {arr.map((item, index) => (
              <Row key={index}>
                <Card>
                    <Card.Body>{item}</Card.Body>
                </Card>
              </Row>
            ))}
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}