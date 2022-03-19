import React from 'react'
import AppField from '../../components/appField/AppField';
import User from '../../components/user/User';
import userPic from '../../assets/images/pic/example-ava.jpg';

const Main = () => {

	return (
		<div className="main__container">
			<div className="main__wrapper">
				<User 
                    firstName="Alena" 
                    lastName="Cherepanova"
                    image={userPic}
                />
				<AppField />
			</div>
		</div>
	)
};

export default Main;
