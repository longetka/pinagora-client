import React from 'react';
import SelectFolderButton from '../../components/buttons/selectFolderButton/SelectFolderButton';
import FolderNavbar from '../../components/folderNavbar/FolderNavbar';
import NavAppField from '../../components/navAppField/NavAppField';
import PhotoFrame from '../../components/photoFrame/PhotoFrame';
import SearchField from '../../components/searchField/SearchField';

const Gallery = () => {
	return (
		<div className="page-wrapper">
			<FolderNavbar variant="galleryNavbar">
				<SelectFolderButton folderName="Folder name"/>
				<SearchField />
			</FolderNavbar>
			<PhotoFrame />
			<NavAppField />
		</div>
	);
};

export default Gallery;