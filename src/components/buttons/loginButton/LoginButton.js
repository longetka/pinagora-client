import React from 'react';
import {Link} from 'react-router-dom';
import userLoginPic from '../../../assets/images/icons/user_login.png';

const LoginButton = ({name}) => {

	return (
		<Link to="/login" className="loginButton">
			<img 
                src={userLoginPic} 
                alt="user login" 
                className="loginButton__avatar" 
            />
			<p className="loginButton__username">{name}</p>
		</Link>
	);
};

export default LoginButton;
