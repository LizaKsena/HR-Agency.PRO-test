import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddArtThunk } from '../../redux/actions/allArticleAction';

export default function Form() {
  const inputValue = {
    title: '',
    text: '',
  };
  const [article, setArticle] = useState(inputValue);
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    setArticle((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = () => {
    dispatch(AddArtThunk(article));
    setArticle(inputValue);
  };

  return (
    <form className=" d-flex flex-column align-items-center w-50">
      <h5>Добавить статью</h5>
      <div className="mb-3 ">
        <input onChange={changeHandler} type="text" name="title" className="form-control" id="title" placeholder="заголовок" />
      </div>
      <div className="mb-3">
        <textarea onChange={changeHandler} type="text" name="text" className="form-control" id="text" placeholder="текст" />
      </div>
      <button type="submit" className="btn btn-outline-primary" onClick={() => submitHandler()}>Submit</button>
    </form>
  );
}
