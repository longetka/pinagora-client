import React from 'react';
import User from '../user/User';
import ImageUserUpload from '../buttons/imageUserUpload/ImageUserUpload';
import defaultAvatar from '../../assets/images/pic/defaultAvatar.png';

const SettingsImageChange = () => {
    return (
        <div className='settingsImageChange'>
            <User image={defaultAvatar} />
            <ImageUserUpload />
        </div>
    )
};

export default SettingsImageChange;
