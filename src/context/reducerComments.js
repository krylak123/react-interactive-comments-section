export const commentActions = {
  COMMENT_ADD: 'COMMENT_ADD',
  REPLY_ADD: 'REPLY_ADD',
};

const handleCommentAdd = (state, payload) => {
  const newState = [...state, payload.comment];

  return newState;
};

const handleReplyAdd = (state, payload) => {
  const newState = state;

  newState.forEach((item) => {
    if (item.id === payload.parentID) {
      item.replies.push(payload.reply);
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

    default:
      return state;
  }
};

export default reducerComment;
