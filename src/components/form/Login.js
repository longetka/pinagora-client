import React from 'react';
import userIcon from './icons/user.svg';
import emailIcon from './icons/email.svg';
import passIcon from './icons/password.svg';
import Input from './components/Input';
import Button from './buttons/Button';

const Login = () => {
	
	return (
		<div className="form__wrapper">
			<div className="form__container">
				<h1>LOG IN</h1>
				<form className="form">
					<Input 
						id="username"
						icon={userIcon}
						iconAltName="Username"
						inputType="text"
						placeholder="Username"
					/>
					<Input 
						id="email"
						icon={emailIcon}
						iconAltName="Email"
						inputType="email"
						placeholder="Email address"
					/>
					<Input 
						id="password"
						icon={passIcon}
						iconAltName="Password"
						inputType="password"
						placeholder="Password"
					/>
					<Button 
						btnType="submit"
						btnName="LOGIN"
					/>
					<div className="form__links">
						<a href="#">
							Forgot password?
						</a>
						<a href="#">
							Registration
						</a>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login;