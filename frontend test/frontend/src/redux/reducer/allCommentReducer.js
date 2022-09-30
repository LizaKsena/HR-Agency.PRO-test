// eslint-disable-next-line default-param-last
const allCommentReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ALL_COM':
      return payload;
    case 'ADD_COM':
      return [payload, ...state];
    default:
      return state;
  }
};

export default allCommentReducer;
