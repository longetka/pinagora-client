import React from 'react';
import { Link } from 'react-router-dom';
import logotypePic from '../../assets/images/pic/logotype.png';
import LoginButton from '../buttons/loginButton/LoginButton';

const Navbar = (props) => {

	return (
		<div>
			<nav className="navbar">
				<Link to="/">
					<img 
                        src={logotypePic} 
                        alt="Pinagora logotype" 
                        className="navbar__logotype" 
                    />
				</Link>
				
				<LoginButton name={props.userName} />
			</nav>
		</div>
	)
};

export default Navbar;
