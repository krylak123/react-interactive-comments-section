import React, { useContext } from 'react';

import { AppContext } from '../context/GlobalStore';
import Comment from './Comment';

const CommentsList = () => {
  const { comments } = useContext(AppContext);

  const commentsMap = comments.map((item) => <Comment key={item.id} {...item} />);

  return <ul className="commentsList">{commentsMap}</ul>;
};

export default CommentsList;
