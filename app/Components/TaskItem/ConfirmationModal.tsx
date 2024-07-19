import React from 'react';
import styled from 'styled-components';

interface Props {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<Props> = ({ message, onConfirm, onCancel }) => {
  return (
    <ModalOverlay>
      <ModalContent className='text-black'>
        <p>{message}</p>
        <div className="modal-actions">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;

  .modal-actions {
    margin-top: 1rem;
    display: flex;
    justify-content: space-around;

    button {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:first-child {
        background-color: #d9534f;
        color: white;
      }

      &:last-child {
        background-color: #5bc0de;
        color: white;
      }
    }
  }
`;

export default ConfirmationModal;
