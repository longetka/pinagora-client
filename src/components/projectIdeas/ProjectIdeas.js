import React from 'react';
import SortFolderButton from '../buttons/sortFolderButton/SortFolderButton';

const ProjectIdeas = () => {
	return (
		<div className="projectIdeas">
			<div className="projectIdeas__head">
				<h1 className="projectIdeas__title">Идеи</h1>
				<SortFolderButton />
			</div>
			
			<div className="projectIdeas__ideas">
				<ul className="projectIdeas__list">

				</ul>
			</div>
		</div>
	);
};

export default ProjectIdeas;