import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children, handleOnClose, isOpen }) => {
  const modalRef = useRef(null);

  const handleOnOutsideClick = (e) => {
    const { current } = modalRef;

    if (e.target === current) handleOnClose();
  };

  useEffect(() => {
    const { current: modal } = modalRef;

    if (isOpen) modal.showModal();
    else modal.close();
  }, [isOpen]);

  return ReactDOM.createPortal(
    <dialog className="modal" ref={modalRef} onClick={handleOnOutsideClick}>
      {children}
    </dialog>,
    document.body,
  );
};

export default Modal;
