import React from 'react';
import userLoginPic from '../../../assets/images/icons/user_login.png';

const LoginButton = (props) => {

	return (
		<a href="/" className="loginButton">
			<img src={userLoginPic} alt="" className="loginButton__avatar" />
			<p className="loginButton__username">{props.userName}</p>
		</a>
	);
};

export default LoginButton;