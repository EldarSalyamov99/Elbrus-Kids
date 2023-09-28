import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalComponentForm from './ModalComponentForm';
import type { UpdateUserType } from '../../Types/userTypes';

type ModalEditProps = {
  user: UpdateUserType;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: () => void;
};

function ModalEdit({ user, setIsModalOpen, closeModal }: ModalEditProps): JSX.Element {
  return (
    // <div className="modal show" style={{ display: 'block', position: 'initial' }}>
    <Modal   show={setIsModalOpen} onHide={closeModal}>
      <Modal.Dialog>
        <ModalComponentForm closeModal={closeModal} user={user} />
      </Modal.Dialog>
    </Modal>
    // </div>
  );
}

export default ModalEdit;
