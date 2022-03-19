import React from 'react';

const UserButton = ({name, isActive}) => {
    return (
        <button 
            className='userButton'
            disabled={isActive ? '' : 'disabled'}
        >
            {name} 
        </button>
    );
};

export default UserButton;
