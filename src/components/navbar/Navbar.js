import React from 'react';
import { Link } from 'react-router-dom';
import logotypePic from '../../assets/images/pic/logotype.png';
import LoginButton from '../buttons/loginButton/LoginButton';
import SignBlock from '../signBlock/SignBlock';

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
				
                {
                    props.isLogin
                    ? <LoginButton name={props.userName} />
                    : <SignBlock />
                }
			</nav>
		</div>
	)
};

export default Navbar;
