export const allart = (payload) => ({
  type: 'ALL_ART',
  payload,
});

export const addArticle = (payload) => ({
  type: 'ADD_ART',
  payload,
});

export const deleteArticle = (payload) => ({
  type: 'DELETE_ART',
  payload,
});

export const oneArt = (payload) => ({
  type: 'ONE_ART',
  payload,
});

export const allArtThunk = () => async (dispath) => {
  const response = await fetch('http://localhost:3030/api/article');
  const data = await response.json();
  dispath(allart(data.data));
};

export const AddArtThunk = (payload) => async (dispatch) => {
  const response = await fetch('http://localhost:3030/api/article', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  if (response.status === 200) {
    const article = await response.json();
    dispatch(addArticle(article));
  }
};

export const deleteArtThunk = (id) => async (dispatch) => {
  dispatch(deleteArticle(id));
};

export const oneArtThunk = (id) => async (dispath) => {
  const response = await fetch(`http://localhost:3030/api/article/${id}`);
  const data = await response.json();
  // console.log('oneArt', data);
  dispath(oneArt(data));
};
