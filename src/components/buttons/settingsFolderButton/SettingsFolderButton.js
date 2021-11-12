import React from 'react';
import settingIcon from '../../../assets/images/icons/settings.png';

const SettingsFolderButton = () => {
	return (
		<div className="settingFolderButton">
			<img className="settingFolderButton__image" src={settingIcon} alt="Settings" />
			<p className="settingFolderButton__name">Folder settings</p>
		</div>
	);
};

export default SettingsFolderButton;