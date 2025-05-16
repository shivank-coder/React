import React from 'react';

export const Pizza = (props) => {
  console.log(props.name);

  return (
    <>
      <h1 className="root">{props.name}</h1>
    </>
  );
};
