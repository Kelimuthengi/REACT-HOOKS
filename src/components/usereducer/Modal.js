import React, { useEffect } from 'react'

const Modal = ({ modalContent, closeModal }) => {

  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 4000)
  })
  return (
    <div>
      <h4>{modalContent}</h4>
    </div>
  );
};

export default Modal
