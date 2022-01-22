import React from 'react';

import CommentsList from './CommentsList';
import Form from './Form';

const App = () => (
  <main className="main">
    <div className="main__container container">
      <CommentsList />
      <Form />
    </div>
  </main>
);

export default App;
