import React from 'react';
import logotypePic from '../../assets/images/pic/logotype.png';
import LoginButton from '../buttons/loginButton/LoginButton';

const Navbar = (props) => {

	return (
		<div>
			<nav className="navbar">
				<img src={logotypePic} alt="Pinagora logotype" className="navbar__logotype" />
				<LoginButton userName={props.userName} />
			</nav>
		</div>
	)
};

export default Navbar;