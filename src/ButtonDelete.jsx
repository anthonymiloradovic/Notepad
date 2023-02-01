import React from 'react';

const ButtonDelete = ({ index, handleDelete }) => (
    <button onClick={() => handleDelete(index)}> x</button>
  );
export default ButtonDelete;