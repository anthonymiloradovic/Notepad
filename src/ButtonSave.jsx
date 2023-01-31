import React from 'react';
import './ButtonSave.css';

const ButtonSave = (props) => {
    return (
        <div className='container-button-save-note'>
            <button className="button-save-note" onClick={props.onSubmit}>{props.label}</button>
        </div>
    );
};

export default ButtonSave;
