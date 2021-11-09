import React from 'react'
import AppField from '../../components/appField/AppField';
import User from '../../components/user/User';

const Main = () => {

	return (
		<div className="main__container">
			<User firstName="Alena" lastName="Cherepanova"/>
			<AppField />
		</div>
	)
};

export default Main;