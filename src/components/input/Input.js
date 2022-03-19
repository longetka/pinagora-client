import React from 'react';

const Input = ({type, id, name=' ', placeholder}) => {
    return (
        <label htmlFor={id} className='input__label'>{name}
            <input 
                type={type} 
                id={id} 
                name={id} 
                placeholder={placeholder} 
                className='input'
            />
        </label>
    );
};

export default Input;
