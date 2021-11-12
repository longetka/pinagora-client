import React from 'react';
import FolderButton from '../../components/buttons/folderButton/FolderButton';
import FolderNavbar from '../../components/folderNavbar/FolderNavbar';
import NavAppField from '../../components/navAppField/NavAppField';
import saveDataTest from './saveDataTest';

const Save = (props) => {
	const foldersData = saveDataTest.map((value, index) => {
		return (
			<FolderButton name={value.name} key={index} />
		)
	});

	return (
		<div className="save__wrapper">
			<FolderNavbar />
			<div className="save__container">
				{foldersData}
			</div>
			<NavAppField />
		</div>
	);
};

export default Save;