import React from 'react';
import taskIcon from '../../assets/images/icons/my-task.png';
import importantIcon from '../../assets/images/icons/important.png';
import ideaIcon from '../../assets/images/icons/idea.png';
// import addIcon from '../../assets/images/icons/add-list.png';
import ProjectNavLink from '../projectNavLink/ProjectNavLink';

const ProjectNav = () => {
	return (
		<nav className="projectNav">
			<ul className="projectNav__list">
				<li className="projectNav__item">
					<ProjectNavLink to="mytasks" name="Мои задачи" icon={taskIcon} />
				</li>
				<li className="projectNav__item">
					<ProjectNavLink to="important" name="Важно" icon={importantIcon} />
				</li>
				<li className="projectNav__item">
					<ProjectNavLink to="ideas" name="Идеи" icon={ideaIcon} />
				</li>
				<li className="projectNav__item">
					
				</li>
			</ul>
		</nav>
	);
};

export default ProjectNav;