import React from 'react';
import SelectFolderButton from '../../components/buttons/selectFolderButton/SelectFolderButton';
import FolderNavbar from '../../components/folderNavbar/FolderNavbar';
import NavAppField from '../../components/navAppField/NavAppField';
import PhotoFrame from '../../components/photoFrame/PhotoFrame';
import SearchField from '../../components/searchField/SearchField';

const Gallery = () => {
	return (
		<div className="gallery__wrapper">
			<div className="gallery">
				<FolderNavbar variant="galleryNavbar">
					<SelectFolderButton folderName="Folder name"/>
					<SearchField />
				</FolderNavbar>
				<PhotoFrame />	
			</div>
			<NavAppField />
		</div>
	);
};

export default Gallery;