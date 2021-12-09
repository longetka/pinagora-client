import React from 'react';
import { useMatch, Link, useResolvedPath } from 'react-router-dom';


const ProjectNavLink = ({ to, ...props }) => {
	const resolved = useResolvedPath(to);
	const match = useMatch({ path: resolved.pathname, end: true });
	return (
		<Link 
			to={to}	
			className={match ? "projectNavLink isActive" : "projectNavLink"}  
		>
			<img className="projectNavLink__icon" src={props.icon} alt={props.name}/>{props.name}
		</Link>
	);
};

export default ProjectNavLink;