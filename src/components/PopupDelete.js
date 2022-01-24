import React from 'react';

import Modal from './Modal';

const PopupDelete = ({ handleOnClose, isOpen }) => {
  const handleOnClick = (e) => {
    if (e.target.name === 'delete') {
      console.log('delete');
    }
    handleOnClose(false);
  };

  return (
    <Modal handleOnClose={handleOnClose} isOpen={isOpen}>
      <p className="modal__title">Delete comment</p>
      <p className="modal__text">
        Are you sure you want to delete this comment? This will remove the comment and can't be
        undone.
      </p>
      <div className="modal__btns-container">
        <button
          type="submit"
          name="cancel"
          className="modal__btn modal__btn--cancel"
          onClick={handleOnClick}
        >
          No, cancel
        </button>
        <button
          type="submit"
          name="delete"
          className="modal__btn modal__btn--delete"
          onClick={handleOnClick}
        >
          Yes, delete
        </button>
      </div>
    </Modal>
  );
};

export default PopupDelete;
