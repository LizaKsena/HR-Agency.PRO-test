// eslint-disable-next-line default-param-last
const allArticleReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ALL_ART':
      return payload;
    case 'ADD_ART':
      return [payload, ...state];
    case 'DELETE_ART':
      return state.filter((elem) => elem.id !== payload);
    case 'ONE_ART':
      return payload;
    default:
      return state;
  }
};

export default allArticleReducer;
