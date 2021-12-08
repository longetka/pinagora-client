import React from 'react';
import { Link } from 'react-router-dom';
import taskIcon from '../../assets/images/icons/my-task.png';
import importantIcon from '../../assets/images/icons/important.png';
import ideaIcon from '../../assets/images/icons/idea.png';
import addIcon from '../../assets/images/icons/add-list.png';

const ProjectNav = () => {
	return (
		<nav className="projectNav">
			<ul className="projectNav__list">
				<li className="projectNav__item">
					<Link exact className="projectNav__link" to="/mytasks">
						<img className="projectNav__icon" src={taskIcon} alt="My tasks"/>Мои задачи
					</Link>
				</li>
				<li className="projectNav__item">
					<Link className="projectNav__link" to="/important">
						<img className="projectNav__icon" src={importantIcon} alt="Importants"/>Важно
					</Link>
				</li>
				<li className="projectNav__item">
					<Link className="projectNav__link" to="/ideas">
						<img className="projectNav__icon" src={ideaIcon} alt="Ideas"/>Идеи
					</Link>
				</li>
				<li className="projectNav__item">
					<Link className="projectNav__link" to="/createList">
						<img className="projectNav__icon" src={addIcon} alt="My tasks"/>Создать список
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default ProjectNav;