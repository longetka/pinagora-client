import React, {useState, useEffect} from 'react'
import AppField from '../../components/appField/AppField';
import User from '../../components/user/User';
import userPic from '../../assets/images/pic/example-ava.jpg';
import axios from 'axios';

const Main = () => {
    let [userData, setUserData] = useState({
        firstName: '',
        lastName: ''
    });
    let userId = localStorage.getItem('userData');

    useEffect(() => {
        axios.post(
            '/user',
            userId,
            {headers: {
                'Content-Type': 'application/json'
            }}
        )
            .then(response => {
                setUserData({
                    firstName: response.data.user.firstName,
                    lastName: response.data.user.lastName
                });
            })
            .catch(e => console.log(e.message));
    }, []);

	return (
		<div className="main__container">
			<div className="main__wrapper">
				<User 
                    firstName={userData.firstName}
                    lastName={userData.lastName}
                    image={userPic}
                />
				<AppField />
			</div>
		</div>
	)
};

export default Main;
