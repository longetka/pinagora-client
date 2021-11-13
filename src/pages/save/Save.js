import React from 'react';
import CreateFolderButton from '../../components/buttons/createFolderButton/CreateFolderButton';
import FolderButton from '../../components/buttons/folderButton/FolderButton';
import SettingsFolderButton from '../../components/buttons/settingsFolderButton/SettingsFolderButton';
import SortFolderButton from '../../components/buttons/sortFolderButton/SortFolderButton';
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
		<div className="page-wrapper">
			<FolderNavbar>
				<SettingsFolderButton />
				<SortFolderButton />
				<CreateFolderButton />
			</FolderNavbar>
			<div className="save__container">
				{foldersData}
			</div>
			<NavAppField />
		</div>
	);
};

export default Save;