import React from 'react';

const InputPass = ({type, id, name=' ', placeholder, onchange}) => {
    return (
        <label htmlFor={id} className='inputPass__label'>{name}
            <input 
                type={type} 
                id={id} 
                name={id} 
                placeholder={placeholder} 
                className='inputPass'
                onChange={onchange}
            />
        </label>
    );
};

export default InputPass;
