import React from 'react';

const JobTodoItem = ({name, elemKey}) => {
    return (
        <li className="jobTodo__item" key={elemKey}>{name}</li>
    );
};

export default JobTodoItem;
