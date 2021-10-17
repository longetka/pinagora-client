import React from 'react';
import Input from './components/Input';
import Button from './buttons/Button';

const Auth = () => {
	
	return (
		<div className="form__wrapper">
			<div className="form__container">
				<div className="form__title">
					<h1>Регистрация</h1>
				</div>
				<form className="form">
					<Input 
						name="username"
						inputType="text"
						placeholder="Логин"
					/>
					<Input 
						name="email"
						inputType="email"
						placeholder="Email"
					/>
					<Input 
						name="password"
						inputType="password"
						placeholder="Пароль"
					/>
					<Input 
						name="password"
						inputType="password"
						placeholder="Повторите пароль"
					/>
					<Button 
						btnType="submit"
						btnName="Регистрация"
					/>
				</form>
			</div>
		</div>
	)
}

export default Auth;