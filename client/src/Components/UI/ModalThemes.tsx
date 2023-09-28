/* eslint-disable react/button-has-type */
import React from 'react';
import { Button, Modal, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import type { ThemesType } from '../../Types/gameTypes';
import apiClient from '../../Services/apiConfig';

type ModalProps = {
  handleClose: () => void;
  themes: ThemesType[];
  show: boolean;
};

export default function ModalTHemes({ show, handleClose, themes }: ModalProps): JSX.Element {
  const navigate = useNavigate();

  const clickHandler = async (id: number): void => {
    await apiClient.delete(`/game/${id}`);
    navigate(`/courses/${id}`);
  };

  console.log('themes', themes);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <Col>
          {themes.map((item, index) => (
            <Row key={item.id}>
              <Card>
                <Button
                  onClick={() => navigate(`/courses/${item.id}`)}
                  disabled={item.progress}
                  style={{ backgroundColor: 'blue' }}
                >
                  {item.catName}
                </Button>
                {item.progress && (
                  <Button onClick={() => clickHandler(item.id)} variant="primary">
                    Заново
                  </Button>
                )}
              </Card>
            </Row>
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
