import React from 'react';
import JobTodo from '../jobTodo/JobTodo';

const JobTree = ({data, onChange}) => {
    const jobTodoHandler = (event) => {
        let eventId = event.target.id;
        onChange(eventId);
    };
    const renderItems = data.map((item, index) => {
        console.log(item) 
        let splitWords = item.name.split(' ');
        let firstLetter = splitWords[1].charAt(0).toUpperCase();
        let changedTitle = 
            `${splitWords[0]}${firstLetter}.${splitWords[2]} 
        ${splitWords[3] ? splitWords[3] : ''}`;

        return (
            <p 
                key={index}
                onClick={event => jobTodoHandler(event)}
                id={item.id}
            >
                {changedTitle}
            </p>
        ) 
    });

    return (
        <div className="jobTree">
            {renderItems}
        </div>
    );
};

export default JobTree;
