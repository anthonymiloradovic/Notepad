import React, { useState } from 'react';

const MarkdownInput = (props) => {
    // Définition de l'état local pour stocker la valeur du textarea
    const [value, setValue] = useState('');
  
    // Fonction pour mettre à jour la valeur du textarea
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    // Fonction pour appeler la fonction de callback fournie par le parent
    const handleSubmit = (event) => {
      event.preventDefault();
      props.onSubmit(value);
      setValue('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <textarea value={value} onChange={handleChange} />
        <button type="submit">Sauvegarder</button>
      </form>
    );
  };

  export default MarkdownInput;