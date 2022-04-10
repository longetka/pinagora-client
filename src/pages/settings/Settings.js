import React, {useState, useEffect, useCallback} from 'react';
import {Link, Navigate} from 'react-router-dom';
import Input from '../../components/input/Input';
import SettingsImageChange from '../../components/settingsImageChange/SettingsImageChange';
import axios from 'axios';
import SaveChanges from '../../components/buttons/saveChanges/SaveChanges';

const Settings = () => {
    let navigate = Navigate();
    let [responseData, setResponseData] = useState({
        firstName: '',
        lastName: ''
    });
    
    let userId = localStorage.getItem('userData');

    let handleSubmit = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        console.log(history);
        axios.post('/settings', userId, {
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            let {firstName, lastName} = response.data.user;
            setResponseData({firstName, lastName});
        })
        .catch(e => console.log(e.message))
    })
    return (
        <div className='settings'>
            <SettingsImageChange />
            <form 
                className='settings__form'
                onSubmit={handleSubmit}
            >
                <Input  
                    type='text'
                    id='firstName'
                    name='Имя'
                    value={responseData.firstName}
                />
                <Input  
                    type='text'
                    id='lastName'
                    name='Фамилия'
                    value={responseData.lastName}
                />
                <SaveChanges />
            </form>
            <Link >
                Выйти без изменений
            </Link>
        </div>
    );
};

export default Settings;
