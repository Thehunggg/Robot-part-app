import React from 'react';

const Content = (props) => {
  return (
    <div>
      <h2 id={props.id}>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};

export default Content;