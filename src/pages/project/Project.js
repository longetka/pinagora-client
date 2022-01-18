import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import ProjectAside from '../../components/projectAside/ProjectAside';
import ProjectNav from '../../components/projectNav/ProjectNav';

const Project = () => {
	let {id} = useParams();

	return (
		<div className="project">
			<div className="project__main">
				<ProjectNav />
				<div className="project__outlet">
					<Outlet />
				</div>
			</div>
			{ id === "ideas" ? (
				<ProjectAside />
				) : null				
			}
			
		</div>
	);
};

export default Project;