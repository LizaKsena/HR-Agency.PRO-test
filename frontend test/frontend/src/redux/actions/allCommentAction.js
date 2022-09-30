export const allComment = (payload) => ({
  type: 'ALL_COM',
  payload,
});

export const addComment = (payload) => ({
  type: 'ADD_COM',
  payload,
});

export const allCommentThunk = () => async (dispatch) => {
  const response = await fetch('http://localhost:3030/api/comment');
  const data = await response.json();
  // console.log('---->>', data.records);
  dispatch(allComment(data.records));
};

export const AddCommentThunk = (payload) => async (dispatch) => {
  const response = await fetch('http://localhost:3030/api/comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const comment = await response.json();
    dispatch(addComment(comment));
  }
};
