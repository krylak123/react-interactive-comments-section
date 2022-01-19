import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../context/GlobalStore';

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
          <svg
            className="comment__score-img"
            width="11"
            height="11"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
              fill="#C5C6EF"
            />
          </svg>
        </button>
        <p className="comment__score-value">{score}</p>
        <button type="button" className="comment__score-btn">
          <svg
            className="comment__score-img"
            width="11"
            height="3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
              fill="#C5C6EF"
            />
          </svg>
        </button>
      </div>
      <div className="comment__btn-container">
        {user.username === currentUser.username ? (
          <>
            <button type="button" className="comment__btn comment__btn--delete">
              <img src={IconDelete} alt="" className="comment__btn-icon" />
              Delete
            </button>
            <button type="button" className="comment__btn comment__btn--edit">
              <img src={IconEdit} alt="" className="comment__btn-icon" />
              Edit
            </button>
          </>
        ) : (
          <button type="button" className="comment__btn comment__btn--reply">
            <img src={IconReply} alt="" className="comment__btn-icon" />
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
