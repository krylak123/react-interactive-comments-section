import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../context/GlobalStore';

import IconPlus from '../images/icon-plus.svg';
import IconMinus from '../images/icon-minus.svg';
import IconReply from '../images/icon-reply.svg';
import IconEdit from '../images/icon-edit.svg';
import IconDelete from '../images/icon-delete.svg';

const Reply = ({ parentID, id, user, createdAt, score, content, replyingTo }) => {
  const { currentUser } = useContext(AppContext);

  return (
    <li className="comment comment--reply">
      <div className="comment__title-container">
        <p className="comment__name">{user.username}</p>
        {user.username === currentUser.username ? <p className="comment__signature">you</p> : null}
        <p className="comment__time">{createdAt}</p>
      </div>
      <div className="comment__content-container">
        <p className="comment__content">
          {' '}
          <span className="comment__content-user">{`@${replyingTo} `}</span>
          {content}
        </p>
      </div>
      <div className="comment__score-container">
        <button type="button" className="comment__score-btn">
          <img src={IconPlus} alt="" className="comment__score-img" />
        </button>
        <p className="comment__score-value">{score}</p>
        <button type="button" className="comment__score-btn">
          <img src={IconMinus} alt="" className="comment__score-img" />
        </button>
      </div>
      <div className="comment__btn-container">
        {user.username === currentUser.username ? (
          <>
            <button type="button" className="comment__btn comment__btn--delete">
              <img src={IconDelete} alt="" className="comment__btn-img" />
              Delete
            </button>
            <button type="button" className="comment__btn comment__btn--edit">
              <img src={IconEdit} alt="" className="comment__btn-img" />
              Edit
            </button>
          </>
        ) : (
          <button type="button" className="comment__btn comment__btn--reply">
            <img src={IconReply} alt="" className="comment__btn-img" />
            Reply
          </button>
        )}
      </div>
    </li>
  );
};

Reply.propTypes = {
  parentID: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.objectOf(Object).isRequired,
  createdAt: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  replyingTo: PropTypes.string.isRequired,
};

export default Reply;
