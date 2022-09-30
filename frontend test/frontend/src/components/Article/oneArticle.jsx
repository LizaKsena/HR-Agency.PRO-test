import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { oneArtThunk } from '../../redux/actions/allArticleAction';
import { allCommentThunk } from '../../redux/actions/allCommentAction';
import Comment from '../Comments/comment';
import AddComment from '../Comments/addComment';
import Loader from '../loader';

export default function oneArticle() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const art = useSelector((store) => store.art);
  const com = useSelector((store) => store.com).filter((el) => el.article === id);

  useEffect(() => {
    dispatch(oneArtThunk(id));
  }, []);

  const commentHandler = () => {
    dispatch(allCommentThunk());
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{art.title}</h5>
        <p className="card-text">{art.text}</p>
        <a href="/" className="card-link">назад</a>
        <p />
        <button
          className="btn btn-outline-success w-25"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          onClick={() => commentHandler()}
        >
          комментарии
        </button>
      </div>
      <div className="collapse" id="collapseExample">
        <AddComment id={id} />

        {<Loader /> && com.map((el) => (
          <Comment user={el.user} text={el.text} key={el.id} />
        ))}
      </div>
    </div>

  );
}
