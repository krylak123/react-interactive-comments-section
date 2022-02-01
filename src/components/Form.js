import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { AppContext } from '../context/GlobalStore';

const Form = ({ type, changeVision, user, parentID, replyID, isReply, prevContent }) => {
  const { currentUser, commentADD, replyADD, commentEDIT, replyEDIT } = useContext(AppContext);
  const [inputValue, setInputValue] = useState(prevContent);
  const avatarImage = require(`../images/avatars/image-${currentUser.username}.png`);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const content = inputValue.trim();

    if (!content) return;

    switch (type) {
      case 'reply':
        replyADD(parentID, {
          id: Math.floor(Math.random() * 1000),
          content,
          createdAt: 'now',
          score: 0,
          replyingTo: user.username,
          user: {
            image: {
              png: currentUser.image.png,
              webp: currentUser.image.webp,
            },
            username: currentUser.username,
          },
        });
        changeVision(false);
        break;

      case 'update':
        if (replyID) replyEDIT(parentID, replyID, content);
        else commentEDIT(parentID, content);
        changeVision(false);
        break;

      default:
        commentADD({
          id: Math.floor(Math.random() * 1000),
          content,
          createdAt: 'now',
          score: 0,
          user: {
            image: {
              png: currentUser.image.png,
              webp: currentUser.image.webp,
            },
            username: currentUser.username,
          },
          replies: [],
        });
        break;
    }

    setInputValue('');
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className={classNames('form', {
        'form--type': type,
        'form--reply': isReply,
        'form--edit': prevContent,
      })}
    >
      <textarea
        // className="form__textarea"
        className={classNames('form__textarea', { 'form__textarea--edit': prevContent })}
        placeholder="Add a comment..."
        value={inputValue}
        onChange={handleOnChange}
      />
      {type !== 'update' ? (
        <div className="form__avatar-container">
          <img src={avatarImage} alt="your avatar" className="form__avatar" />
        </div>
      ) : null}
      <button type="submit" className="form__btn">
        {type || 'send'}
      </button>
    </form>
  );
};

Form.propTypes = {
  type: PropTypes.string,
  changeVision: PropTypes.func,
  user: PropTypes.objectOf(Object),
  parentID: PropTypes.number,
  replyID: PropTypes.number,
  isReply: PropTypes.bool,
  prevContent: PropTypes.string,
};

Form.defaultProps = {
  type: undefined,
  changeVision: undefined,
  user: undefined,
  parentID: undefined,
  replyID: undefined,
  isReply: undefined,
  prevContent: '',
};

export default Form;
