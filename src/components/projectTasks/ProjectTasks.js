import React from 'react';
import TaskCard from '../taskCard/TaskCard';
import addIcon from '../../assets/images/icons/add-task.png';
import tasks from '../../taskTest.js';

const ProjectTasks = (props) => {
	const tasksCardRender = tasks.map((value, index) => {
		return (
			<TaskCard key={index} title={value.title} tasks={value.tasksList} />
		)
	})

	return (
		<div className="projectTasks">
			<h1 className="projectTasks__title">Задачи</h1>
			<div className="projectTasks__tasks">
				{tasksCardRender}
				<div className="projectTasks__button">
					<button className="projectTasks__addTask">
						<img src={addIcon} alt=""/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectTasks;