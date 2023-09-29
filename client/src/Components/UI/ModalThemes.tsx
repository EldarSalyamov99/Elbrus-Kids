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

  const clickHandler = async (e, id: number): void => {
    await apiClient.delete(`/game/${id}`);
    navigate(`/courses/${id}`);
  };

  console.log('themes', themes);
  return (
    <Modal style={{ borderRadius: '20px' }} show={show} onHide={handleClose}>
      <Modal.Body>
        <Col>
          {themes.map((item, index) => (
            <Row key={item.id} style={{ border: 'none' }}>
              <Card
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  border: 'none',
                  marginBottom: '20px',
                }}
              >
                <Button
                  onClick={() => navigate(`/courses/${item.id}`)}
                  disabled={item.progress}
                  className="rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 font-bold uppercase text-white transition hover:brightness-110"
                  variant="primary"
                >
                  Тема: {item.catName}
                </Button>
                {item.progress && (
                  <button
                    className="rounded-2xl border-b-4 border-green-500 bg-green-400 py-3 font-bold uppercase text-white transition hover:brightness-110"
                    style={{ width: '150px' }}
                    onClick={(e) => clickHandler(e, item.id)}
                  >
                    Повторить
                  </button>
                )}
              </Card>
            </Row>
          ))}
        </Col>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="rounded-2xl border-b-4 border-red-500 bg-red-400 py-3 font-bold uppercase text-white transition hover:brightness-110"
          style={{ width: '100%' }}
          onClick={handleClose}
        >
          Закрыть
        </button>
      </Modal.Footer>
    </Modal>
  );
}
