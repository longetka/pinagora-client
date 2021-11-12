import React from 'react';
import sortButtonIcon from '../../../assets/images/icons/sort.png';

const SortFolderButton = () => {
	return (
		<div className="sortFolderButton">
			<img className="sortFolderButton__image" src={sortButtonIcon} alt="Sorting folders" />
			<p className="sortFolderButton__name"></p>
		</div>
	);
};

export default SortFolderButton;