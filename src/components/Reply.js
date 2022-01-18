import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../context/GlobalStore';

const Reply = ({ parentID, id, user, createdAt, score, content, replyingTo }) => {
  const { currentUser } = useContext(AppContext);

  return (
    <li className="comment comment--reply">
      <p>reply</p>
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
