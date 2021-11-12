import React from 'react';
import SettingsFolderButton from '../buttons/settingsFolderButton/SettingsFolderButton';
import SortFolderButton from '../buttons/sortFolderButton/SortFolderButton';

const FolderNavbar = () => {

	return (
		<div className="folderNavbar">
			<SettingsFolderButton />
			<SortFolderButton />
		</div>
	);
};

export default FolderNavbar;