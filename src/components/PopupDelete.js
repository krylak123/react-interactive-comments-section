import React from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';

const PopupDelete = ({ handleOnClose, isOpen, handleDelete, id, parentID }) => {
  const handleOnClick = (e) => {
    if (e.target.name === 'delete' && parentID) handleDelete(parentID, id);
    else if (e.target.name === 'delete' && !parentID) handleDelete(id);

    handleOnClose(false);
  };

  return (
    <Modal handleOnClose={handleOnClose} isOpen={isOpen}>
      <p className="modal__title">Delete comment</p>
      <p className="modal__text">
        Are you sure you want to delete this comment? This will remove the comment and can&apos;t be
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

PopupDelete.propTypes = {
  handleOnClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  parentID: PropTypes.number,
};

PopupDelete.defaultProps = {
  parentID: undefined,
};

export default PopupDelete;
