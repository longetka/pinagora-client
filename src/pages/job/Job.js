import React, {useState} from 'react';
import JobTree from '../../components/jobTree/JobTree';
import JobTodo from '../../components/jobTodo/JobTodo';
import jobData from '../../pages/job/testDataJob';

const Job = () => {
    const [todoId, setTodoId] = useState('');
    const handleChangeId = (todoId) => {
        setTodoId(todoId);
    }

    return (
            <div className="job">
                <JobTree data={jobData} onChange={handleChangeId} />
                <JobTodo data={jobData} idRef={todoId} />
            </div>
    );
};
    	                       	                     
export default Job;
