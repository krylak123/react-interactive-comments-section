import React, { useContext, useState } from 'react';

import { AppContext } from '../context/GlobalStore';

import Test from '../images/avatars/image-juliusomo.png';

const Form = () => {
  const { currentUser } = useContext(AppContext);
  const [inputValue, setInputValue] = useState('');
  const avatarImage = require(`../images/avatars/image-${currentUser.username}.png`);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setInputValue('');
  };

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleOnSubmit} className="form">
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
        send
      </button>
    </form>
  );
};

export default Form;
