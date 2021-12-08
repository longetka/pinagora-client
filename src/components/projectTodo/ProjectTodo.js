import React from 'react';
import { Route } from 'react-router-dom';
import Project from '../../pages/project/Project';

const ProjectTodo = () => {
	return (
		<Route path="project" element={<Project />}>
			<Route path="/mytasks" element={<p>MyTasks</p>}/>
			<Route path="/important" element={<p>Important</p>}/>
			<Route path="/ideas" element={<p>Ideas</p>}/>
			{/* <Route path="/project/mytasks" element={}/> */}
		</Route>
	);
};

export default ProjectTodo;