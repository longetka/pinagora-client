import React from 'react';

const ImageUserUpload = () => {
    return (
        <label 
            htmlFor='imageUpload' 
            className='imageUserUpload'
        >Изменить аватар ...
            <input
                name='imageUpload'
                type='file'
                className='imageUserUpload__input'
                id='imageUpload'
                hidden
            />
        </label>
    );
};

export default ImageUserUpload;
