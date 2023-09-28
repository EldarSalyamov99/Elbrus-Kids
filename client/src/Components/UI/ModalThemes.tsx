import React from 'react';
import { Button, Modal, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import type { ThemesType } from '../../Types/gameTypes';

type ModalProps = {
  handleClose: () => void;
  themes: ThemesType[];
  show: boolean;
};

export default function ModalTHemes({ show, handleClose, themes }: ModalProps): JSX.Element {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <Col>
          {themes.map((item, index) => (
            <Link to={`/courses/${item.id}`}>
              <Row key={item.id}>
                <Card>
                  <Card.Body>{item.catName}</Card.Body>
                </Card>
              </Row>
            </Link>
          ))}
        </Col>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
