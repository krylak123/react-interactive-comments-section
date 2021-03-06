import React, { createContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';

import reducerComment, { commentActions } from './reducerComments';

import DATA from '../data/data.json';

export const AppContext = createContext(null);

const GlobalStore = ({ children }) => {
  const [comments, dispatch] = useReducer(reducerComment, [...DATA.comments]);
  const [currentUser, setCurrentUser] = useState(DATA.currentUser);

  const commentADD = (comment) => {
    dispatch({ type: commentActions.COMMENT_ADD, payload: { comment } });
  };

  const replyADD = (parentID, reply) => {
    dispatch({ type: commentActions.REPLY_ADD, payload: { parentID, reply } });
  };

  const commentDELETE = (id) => {
    dispatch({ type: commentActions.COMMENT_DELETE, payload: { id } });
  };

  const replyDELETE = (parentID, id) => {
    dispatch({ type: commentActions.REPLY_DELETE, payload: { parentID, id } });
  };

  const commentEDIT = (id, newContent) => {
    dispatch({ type: commentActions.COMMENT_EDIT, payload: { id, newContent } });
  };

  const replyEDIT = (parentID, id, newContent) => {
    dispatch({ type: commentActions.REPLY_EDIT, payload: { parentID, id, newContent } });
  };

  const commentVOTE = (id, typeVote) => {
    dispatch({ type: commentActions.COMMENT_VOTE, payload: { id, typeVote } });
  };

  const replyVOTE = (parentID, id, typeVote) => {
    dispatch({ type: commentActions.REPLY_VOTE, payload: { parentID, id, typeVote } });
  };

  return (
    <AppContext.Provider
      value={{
        comments,
        currentUser,
        commentADD,
        replyADD,
        commentDELETE,
        replyDELETE,
        commentEDIT,
        replyEDIT,
        commentVOTE,
        replyVOTE,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

GlobalStore.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStore;
