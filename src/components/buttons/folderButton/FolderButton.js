import React from 'react'
import folderIcon from '../../../assets/images/icons/folder.png';

const FolderButton = (props) => {

	return (
		<div className="folderButton">
			<img className="folderButton__image" src={folderIcon} alt="folder"/>
			<p className="foldderButton__description">{props.name}</p>
		</div>
	);
};

export default FolderButton;