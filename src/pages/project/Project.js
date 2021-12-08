import React from 'react';
import { Outlet } from 'react-router-dom';
import ProjectNav from '../../components/projectNav/ProjectNav';

const Project = () => {
	return (
		<div className="project">
			<div className="project__main">
				<ProjectNav />
				<Outlet />
			</div>
			<aside className="project__aside">
				aside options
			</aside>
		</div>
	);
};

export default Project;