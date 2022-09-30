/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddCommentThunk } from '../../redux/actions/allCommentAction';

export default function Form({ id }) {
  const inputValue = {
    user: 'unknown',
    text: '',
    article: id,
  };
  const dispatch = useDispatch();
  const [text, setText] = useState(inputValue);

  const changeHandler = (e) => {
    setText((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = () => {
    dispatch(AddCommentThunk(text));
    setText(inputValue);
  };

  return (
    <form className=" d-flex flex-column align-items-center">
      <div className="mb-1">
        <textarea onChange={changeHandler} type="text" name="text" className="form-control" id="text" placeholder="комментарий" />
      </div>
      <button type="button" className="btn btn-outline-primary w-25 mb-5" onClick={() => submitHandler()}>отправить</button>
    </form>
  );
}
