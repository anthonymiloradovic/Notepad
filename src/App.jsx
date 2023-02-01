import React from 'react'
import { useState } from 'react'
import MarkdownInput from './MarkdownInput'
import ButtonDelete from './ButtonDelete'
import './App.css'


const App = () => {

  const [data, setData] = useState([]);
  // Fonction de callback pour gérer la soumission du formulaire
  const handleSubmit = (value) => {
    setData([...data, value]);
    
  };
  const handleDelete = (index) => {
    setData(data.slice(0, index).concat(data.slice(index + 1)));
  };
  return (
    <div>
      {data.map((item, index) => (
        <p key={index}>{item}
        <ButtonDelete index={index} handleDelete={handleDelete} />
        </p>
      ))}
      <MarkdownInput onSubmit={handleSubmit} />
      {console.log(data)}
    </div>
  );
};

export default App
