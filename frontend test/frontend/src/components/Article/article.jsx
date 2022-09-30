import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { deleteArtThunk } from '../../redux/actions/allArticleAction';

// eslint-disable-next-line react/prop-types
export default function Article({ title, id }) {
  const dispatch = useDispatch();

  const deleteHandler = (arg) => {
    dispatch(deleteArtThunk(arg));
  };
  return (
    <div
      className="card w-50 mb-3"
    >
      <Link to={`/${id}`} className="text-uppercase fs-5 fw-bolder link-dark">{title}</Link>
      <div className="card-body">
        <button type="submit" className="btn btn-outline-info" onClick={(() => deleteHandler(id))}>удалить</button>
      </div>
    </div>

  );
}
