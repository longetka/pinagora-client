import React, {useState, useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import {Navigate} from 'react-router-dom';
import User from '../../components/user/User';
import defaultAvatar from '../../assets/images/pic/defaultAvatar.png';
import Input from '../../components/input/Input';
import UserButton from '../../components/buttons/userButton/UserButton';
import UserLink from '../../components/userLink/UserLink';
import axios from 'axios';

const Login = () => {
    let {login} = useContext(AuthContext);

    let [responseMessage, setResponseMessage] = useState({
        message: '', visible: false
    });
    let [created, setCreated] = useState(false);

    let loginHandler = (event) => {
        event.preventDefault();
        let data = {
            email: event.target[0].value,
            password: event.target[1].value
        };
        let jsonData = JSON.stringify(data);
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        axios.post('/user/login', jsonData, config)
            .then(response => {
                if (response.status === 200) {
                    setResponseMessage({
                        message: '',
                        visible: false
                    });
                    login(response.data.token, response.data.userId);
                    setCreated(true);
                }
                if (response.status === 202) {
                    setResponseMessage({
                        message: response.data,
                        visible: true
                    });
                }
                console.log(response)
            })
            .catch(e => console.log(e.message));
        console.log(data);
    }

    return (
        <div className='login'>
            <form onSubmit={loginHandler} className='login__wrapper'>
            {
                created
                ? <Navigate to='/' />
                : null
            }
                <User image={defaultAvatar} /> 
                <p
                    className={
                        responseMessage.visible
                        ? 'register__message--visible'
                        : 'register__message'
                    }
                >
                    {responseMessage.message}
                </p>
                <Input 
                    type='email'
                    id='email'
                    placeholder='Email'
                />
                <Input
                    type='password'
                    id='password'
                    placeholder='Password'
                />
                <UserButton type='submit' name='??????????' isActive={true} />
                <UserLink name='??????????????????????' to='/register' />
            </form>
        </div>
    );
};

export default Login;
