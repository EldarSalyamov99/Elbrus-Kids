import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalComponentForm from './ModalComponentForm';


function ModalEdit({ setIsModalOpen, closeModal }): JSX.Element {


  return (
    // <div className="modal show" style={{ display: 'block', position: 'initial' }}>
    <Modal show={setIsModalOpen} onHide={closeModal}>
      <Modal.Dialog>
        <ModalComponentForm />
      </Modal.Dialog>
    </Modal>
    // </div>
  );
}

export default ModalEdit;
