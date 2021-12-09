import React from 'react';
import { Outlet } from 'react-router-dom';
import ProjectNav from '../../components/projectNav/ProjectNav';

const Project = () => {
	return (
		<div className="project">
			<div className="project__main">
				<ProjectNav />
				<div className="project__outlet">
					<Outlet />
				</div>
			</div>
			<aside className="project__aside">
				aside options
			</aside>
		</div>
	);
};

export default Project;