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

  return (
    <AppContext.Provider
      value={{
        comments,
        currentUser,
        commentADD,
        replyADD,
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
