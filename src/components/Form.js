import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { AppContext } from '../context/GlobalStore';

const Form = ({ type, changeVision, user, parentID, isReply }) => {
  const { currentUser, commentADD, replyADD } = useContext(AppContext);
  const [inputValue, setInputValue] = useState('');
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
      className={classNames('form', { 'form--type': type, 'form--reply': isReply })}
    >
      <textarea
        className="form__textarea"
        placeholder="Add a comment..."
        value={inputValue}
        onChange={handleOnChange}
      />
      <div className="form__avatar-container">
        <img src={avatarImage} alt="your avatar" className="form__avatar" />
      </div>
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
  isReply: PropTypes.bool,
};

Form.defaultProps = {
  type: undefined,
  changeVision: undefined,
  user: undefined,
  parentID: undefined,
  isReply: undefined,
};

export default Form;
