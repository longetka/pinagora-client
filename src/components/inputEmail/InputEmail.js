import React, {useEffect} from 'react';

const InputEmail = ({type, id, name=' ', placeholder, onchange}) => {
    return (
        <label htmlFor={id} className='inputEmail__label'>{name}
            <input 
                type={type} 
                id={id} 
                name={id} 
                placeholder={placeholder} 
                className='inputEmail'
                onChange={onchange}
            />
        </label>
    );
};

export default InputEmail;
