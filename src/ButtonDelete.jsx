import React from 'react';
import './ButtonDelete.css';

const ButtonDelete = ({ index, handleDelete }) => (
    <button className='btn-delete' onClick={() => handleDelete(index)}> x</button>
  );
export default ButtonDelete;