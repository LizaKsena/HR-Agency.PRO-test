/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line object-curly-spacing
export default function Comment({user, text}) {
  return (

    <div className="card w-50 d-flex d-inline-flex m-3 bg-success bg-opacity-25">
      <div className="card-body">
        <h5 className="card-title">{user}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>

  );
}
