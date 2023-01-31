import React from 'react'
import { useState } from 'react'
import MarkdownInput from './MarkdownInput'
import './App.css'


const App = () => {

  const [data, setData] = useState([]);
  // Fonction de callback pour gérer la soumission du formulaire
  const handleSubmit = (value) => {
    setData([...data, value]);
    
  };

  return (
    <div>
      {data.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <MarkdownInput onSubmit={handleSubmit} />
      
      {console.log(data)}
    </div>
  );
};

export default App
