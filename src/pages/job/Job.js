import React from 'react';
import JobTodo from '../../components/jobTodo/JobTodo';
import JobTree from '../../components/jobTree/JobTree';

const Job = () => {
    return (
        <div className="job">
            <JobTree />
            <JobTodo />
        </div>
    );
};
    	                       	                     
export default Job;
