import React from 'react';
import sortButtonIcon from '../../../assets/images/icons/sort.png';
import Select from '../../select/Select';

const SortFolderButton = () => {
	const optionsButtons = [
		{
			name: "name",
			value: "Имя"
		},
		{
			name: "date",
			value: "Дата"
		},
		{
			name: "size",
			value: "Размер"
		}
	];
	return (
		<div className="sortFolderButton__container">
			<div className="sortFolderButton">
				<img className="sortFolderButton__image" src={sortButtonIcon} alt="Sorting folders" />
				<p className="sortFolderButton__name font-secondary">Sort by</p>
			</div>
			<Select 
				inputs={optionsButtons}
			/>
		</div>
	);
};

export default SortFolderButton;