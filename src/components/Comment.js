import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '../context/GlobalStore';

import Reply from './Reply';

const Comment = ({ id, user, createdAt, score, content, replies }) => {
  const { currentUser } = useContext(AppContext);

  const repliesMap = replies.map((item) => <Reply key={item.id} parentID={id} {...item} />);

  return (
    <>
      <li className="comment">
        <p>comment</p>
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
