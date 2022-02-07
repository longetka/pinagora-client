import React, {useState} from 'react';
import JobTree from '../../components/jobTree/JobTree';
import JobTodo from '../../components/jobTodo/JobTodo';
import jobData from '../../pages/job/testDataJob';
import NavAppField from '../../components/navAppField/NavAppField';
import JobRoadMap from '../../components/jobRoadMap/JobRoadMap';

const Job = () => {
    const [todoId, setTodoId] = useState('');
    const handleChangeId = (todoId) => {
        setTodoId(todoId);
    }

    return (
        <div className="job">
            <div className="job__container">
                <JobRoadMap />
                <JobTree data={jobData} onChange={handleChangeId} />
                <JobTodo data={jobData} idRef={todoId} />
            </div>
            <NavAppField />
        </div>
    );
};
    	                       	                     
export default Job;
