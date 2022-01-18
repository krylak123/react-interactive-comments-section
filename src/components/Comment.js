import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../context/GlobalStore';

import Reply from './Reply';

import IconPlus from '../images/icon-plus.svg';
import IconMinus from '../images/icon-minus.svg';
import IconReply from '../images/icon-reply.svg';
import IconEdit from '../images/icon-edit.svg';
import IconDelete from '../images/icon-delete.svg';

const Comment = ({ id, user, createdAt, score, content, replies }) => {
  const { currentUser } = useContext(AppContext);

  const repliesMap = replies.map((item) => <Reply key={item.id} parentID={id} {...item} />);

  return (
    <>
      <li className="comment">
        <div className="comment__title-container">
          <p className="comment__name">{user.username}</p>
          {user.username === currentUser.username ? (
            <p className="comment__signature">you</p>
          ) : null}
          <p className="comment__time">{createdAt}</p>
        </div>
        <div className="comment__content-container">
          <p className="comment__content">{content}</p>
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
              <button type="button" className="comment__btn comment__btn--reply">
                <img src={IconDelete} alt="" className="comment__btn-img" />
                Delete
              </button>
              <button type="button" className="comment__btn comment__btn--reply">
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
      {repliesMap}
    </>
  );
};

Comment.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.objectOf(Object).isRequired,
  createdAt: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  replies: PropTypes.arrayOf(Object).isRequired,
};

export default Comment;
