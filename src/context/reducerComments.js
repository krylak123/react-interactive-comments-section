export const commentActions = {
  COMMENT_ADD: 'COMMENT_ADD',
  REPLY_ADD: 'REPLY_ADD',
  COMMENT_DELETE: 'COMMENT_DELETE',
  REPLY_DELETE: 'REPLY_DELETE',
  COMMENT_EDIT: 'COMMENT_EDIT',
  REPLY_EDIT: 'REPLY_EDIT',
  COMMENT_VOTE: 'COMMENT_VOTE',
  REPLY_VOTE: 'REPLY_VOTE',
};

const handleCommentAdd = (state, { comment }) => {
  const newState = [...state, comment];

  return newState;
};

const handleReplyAdd = (state, { parentID, reply }) => {
  const newState = state;

  newState.forEach((item) => {
    if (item.id === parentID) {
      item.replies.push(reply);
    }
  });

  return [...newState];
};

const handleCommentDelete = (state, { id }) => {
  const newState = state.filter((item) => item.id !== id);

  return newState;
};

const handleReplyDelete = (state, { parentID, id }) => {
  const newState = state;

  newState.forEach((item) => {
    if (item.id === parentID) {
      item.replies = item.replies.filter((reply) => reply.id !== id);
    }
  });

  return [...newState];
};

const handleCommentEdit = (state, { id, newContent }) => {
  const newState = state;

  newState.forEach((item) => {
    if (item.id === id) {
      item.content = newContent;
    }
  });

  return [...newState];
};

const handleReplyEdit = (state, { parentID, id, newContent }) => {
  const newState = state;

  newState.forEach((item) => {
    if (item.id === parentID) {
      item.replies.forEach((reply) => {
        if (reply.id === id) {
          reply.content = newContent;
        }
      });
    }
  });

  return [...newState];
};

const handleCommentVote = (state, { id, typeVote }) => {
  const newState = state;

  newState.forEach((item) => {
    if (item.id === id) {
      if (typeVote === 'up') item.score += 1;
      else if (typeVote === 'down') item.score -= 1;
    }
  });

  return [...newState];
};

const handleReplyVote = (state, { parentID, id, typeVote }) => {
  const newState = state;

  newState.forEach((item) => {
    if (item.id === parentID) {
      item.replies.forEach((reply) => {
        if (reply.id === id) {
          if (typeVote === 'up') reply.score += 1;
          else if (typeVote === 'down') reply.score -= 1;
        }
      });
    }
  });

  return [...newState];
};

const reducerComment = (state, action) => {
  switch (action.type) {
    case commentActions.COMMENT_ADD:
      return handleCommentAdd(state, action.payload);

    case commentActions.REPLY_ADD:
      return handleReplyAdd(state, action.payload);

    case commentActions.COMMENT_DELETE:
      return handleCommentDelete(state, action.payload);

    case commentActions.REPLY_DELETE:
      return handleReplyDelete(state, action.payload);

    case commentActions.COMMENT_EDIT:
      return handleCommentEdit(state, action.payload);

    case commentActions.REPLY_EDIT:
      return handleReplyEdit(state, action.payload);

    case commentActions.COMMENT_VOTE:
      return handleCommentVote(state, action.payload);

    case commentActions.REPLY_VOTE:
      return handleReplyVote(state, action.payload);

    default:
      return state;
  }
};

export default reducerComment;
