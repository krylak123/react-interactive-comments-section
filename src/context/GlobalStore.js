import React, { createContext, useReducer, useState } from 'react';
import PropTypes from 'prop-types';

import reducerComment from './reducerComments';

import DATA from '../data/data.json';

export const AppContext = createContext(null);

const GlobalStore = ({ children }) => {
  const [comments, dispatch] = useReducer(reducerComment, [...DATA.comments]);
  const [currentUser, setCurrentUser] = useState(DATA.currentUser);

  return (
    <AppContext.Provider
      value={{
        comments,
        currentUser,
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
