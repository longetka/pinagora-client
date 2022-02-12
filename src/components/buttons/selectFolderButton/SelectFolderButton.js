import React from 'react';
import folderIcon from '../../../assets/images/icons/selected_folder.png';

const SelectFolderButton = (props) => {
	return (
		<div className="selectFolderButton">
			<img 
                className="selectFolderButton__image" 
                src={folderIcon} 
                alt="Select folder"
            />
			<p className="font-secondary">{props.folderName}</p>
		</div>
	);
};

export default SelectFolderButton;
