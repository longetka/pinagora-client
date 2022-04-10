import React from 'react';

const SettingsSave = ({type, name}) => {
    return (
        <button
            type={type}
            className='settingsSave'
        >
            {name}
        </button>
    );
};

export default SettingsSave;
