import React from 'react';
import settingIcon from '../../../assets/images/icons/settings.png';
import Select from '../../select/Select';

const SettingsFolderButton = () => {
	const optionsButtons = [
		{
			name: "copy",
			value: "Копировать"
		},
		{
			name: "send",
			value: "Отправить"
		},
		{
			name: "cut",
			value: "Вырезать"
		},
		{
			name: "properties",
			value: "Свойства"
		}
	];

	return (
		<div className="settingFolderButton__container">
			<div className="settingFolderButton">
				<img className="settingFolderButton__image" src={settingIcon} alt="Settings" />
				<p className="settingFolderButton__name font-secondary">Folder settings</p>
			</div>
			<Select 
				inputs={optionsButtons}
			/>
		</div>
	);
};

export default SettingsFolderButton;