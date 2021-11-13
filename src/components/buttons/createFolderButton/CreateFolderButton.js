import React from 'react';
import folderIcon from '../../../assets/images/icons/add_folder.png';

const CreateFolderButton = () => {
	return (
		<div className="createFolderButton">
			<div className="createFolderButton__container">
				<img className="createFolderButton__image" src={folderIcon} alt="Add folder"/>
				<p className="createFolderButton__name font-secondary">Add folder</p>
			</div>
		</div>
	);
};

export default CreateFolderButton;