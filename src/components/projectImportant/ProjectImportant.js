import React from 'react';
import SortFolderButton from '../buttons/sortFolderButton/SortFolderButton';
import Item from './components/Item';
import items from './testItems';

const ProjectImportant = () => {
	const itemsRender = items.map((value, index) => {
		return (
			<Item key={index} name={value} />
		)
	})

	return (
		<div className="projectImportant">
			<div className="projectImportant__head">
				<h1 className="projectImportant__title">Важно</h1>
				<SortFolderButton />
			</div>
			
			<div className="projectImportant__tasks">
				<ol className="projectImportant__list">
					{itemsRender}
				</ol>
			</div>
		</div>
	);
};

export default ProjectImportant;