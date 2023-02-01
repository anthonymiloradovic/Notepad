import React, { useState } from 'react';
import ButtonSave from './ButtonSave';
import './MarkdownInput.css'


const MarkdownInput = (props) => {
    // Définition de l'état local pour stocker la valeur du textarea
    const [value, setValue] = useState('');
  
    // Fonction pour mettre à jour la valeur du textarea
    const handleChange = (event) => {
      setValue(event.target.value);
      // console.log(event.target.value);
    };
  
    // Fonction pour appeler la fonction de callback fournie par le parent
    const handleSubmit = (event) => {
      event.preventDefault();
      props.onSubmit(value);
      setValue('');
    };
    
  
    return (
      <form className='form'>
        <textarea className='textarea' value={value} onChange={handleChange} />
        <ButtonSave onSubmit={handleSubmit} label="Sauvegarder" />
      </form>
    );
  };

  export default MarkdownInput;