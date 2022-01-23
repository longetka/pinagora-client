import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import ProjectNav from '../../components/projectNav/ProjectNav';
import NavAppField from '../../components/navAppField/NavAppField';
import ProjectAside from '../../components/projectAside/ProjectAside';
// import ProjectAside from '../../components/projectAside/ProjectAside';

const Project = () => {
	let {id} = useParams();

	return (
		<div className="project">
			<div className="project__wrapper">
				<div className="project__main">
					<ProjectNav />
					<div className="project__outlet">
						<Outlet />
					</div>
				</div>
				
			</div>
			{ id === "ideas" ? (
				<ProjectAside />
				) : null				
			}
			<NavAppField />
			
		</div>
	);
};

export default Project;