import React, {useState, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import Input from '../../components/input/Input';
import InputEmail from '../../components/inputEmail/InputEmail';
import InputPass from '../../components/inputPass/InputPass';
import UserButton from '../../components/buttons/userButton/UserButton';
import UserLink from '../../components/userLink/UserLink';
import axios from 'axios';

const Register = () => {
    let [registerResponse, setRegisterResponse] = useState({
        message: '',
        redirect: false
    });
    let [password, setPassword] = useState('');
    let [email, setEmail] = useState('');
    let [emailValid, setEmailValid] = useState(
        {message: '', visible: false, btnActive: false}
    );
    let [passValid, setPassValid] = useState(
        {message: '', visible: false, btnActive: false}
    );

    let register = async (event) => {
        event.preventDefault();
        let data = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: email,
            password: password
        };
        console.log(data)
        let jsonData = JSON.stringify(data);
        let config = {
            headers: {
                'Content-Type': 'application/json'
            },
        };
        axios.post('/user/register', jsonData, config)
            .then(response => {
                console.log(response)
                if (response.status === 201) {
                    setRegisterResponse({
                        message: response.data, 
                        redirect: true
                    });
                } else {
                    setRegisterResponse({
                        message: response.data, 
                        redirect: false
                    });
                }
            })
            .catch(e => console.log(e.message))
    }

    let onChangeEmail = (event) => {
        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
        if (validEmailRegex.test(event.target.value)) {
            setEmailValid({message: '', visible: false, btnActive: true});
            setEmail(event.target.value);
        } else if (event.target.value) {
            setEmailValid(
                {
                    message: 'Введите Email', 
                    visible: true, 
                    btnActive: false
                }
            );
        } else {
            setEmailValid(
                {
                    message: 'Email введен не верно', 
                    visible: true,
                    btnActive: false
                }
            );
        }
    }

    let onChangePass = (event) => {
        if (event.target.value) {
            setPassword(event.target.value);
            setPassValid({message: '', visible: true, btnActive: true});
        } else {
            setPassValid({
                message: 'Введите пароль',
                visible: true,
                btnActive: false
            });
        }
    }

    useEffect(() => {
        console.log('Pass: ' + password);
        console.log('Email: ' + emailValid.btnActive);
        console.log('Pass: ' + passValid.btnActive);
    })

    return (
        <div className='register'>
            <form onSubmit={register} className='register__wrapper'>
            {
                registerResponse.redirect
                ? <Navigate to='/login' />
                : null
            }
                <h3 className='register__title'>Регистрация</h3>
                <p 
                    className={
                        !registerResponse.redirect
                        ? 'register__message--visible'
                        : 'register__message'
                    }
                >
                    {registerResponse.message}
                </p>
                <Input 
                    type='text'
                    id='firstName'
                    placeholder='Имя'
                />
                <Input 
                    type='text'
                    id='lastName'
                    placeholder='Фамилия'
                />
                <InputEmail 
                    type='email'
                    id='email'
                    placeholder='Email'
                    onchange={onChangeEmail}
                    valid={emailValid}
                />
                <p 
                    className={
                            emailValid.visible 
                            ? 'register__message--visible' 
                            : 'register__message'
                        }
                >
                        {emailValid.message}
                </p>
                <InputPass 
                    type='password'
                    id='password'
                    placeholder='Пароль'
                    onchange={onChangePass}
                />
                <p 
                    className={
                        passValid.visible
                        ? 'regsiter__message--visible'
                        : 'register__message'
                    }
                >
                    {passValid.message}
                </p>
                <UserButton 
                    type='submit' 
                    name='Зарегистрироваться' 
                    isActive={passValid.btnActive && emailValid.btnActive}
                />
                <UserLink name='Войти' to='/login' />
            </form>
        </div>
    );
};

export default Register;
