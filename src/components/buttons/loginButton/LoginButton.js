import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../context/AuthContext';
import userLoginPic from '../../../assets/images/icons/user_login.png';

const LoginButton = ({name}) => {
    let [isVisible, setIsVisible] = useState(false);
    let {logOut} = useContext(AuthContext);

    let clickHandler = (event) => {
        setIsVisible(!isVisible);
    }

    let logoutHandler = (event) => {
        event.preventDefault();
        logOut();
    }

	return (
		<div className="loginButton">
            <div onClick={clickHandler} className='loginButton__main'>
                <img 
                    src={userLoginPic} 
                    alt="user login" 
                    className="loginButton__avatar" 
                />
                <p className="loginButton__username">{name}</p>
            </div>
            <div className={
                    isVisible
                    ? 'loginButton__modal--visible'
                    : 'loginButton__modal'
                }
            >
                <Link to='/settings'>Настройки</Link>
                <button onClick={logoutHandler}>Выйти</button>
            </div>
		</div>
	);
};

export default LoginButton;
