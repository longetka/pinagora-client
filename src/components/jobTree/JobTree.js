import React, {useState} from 'react';

const JobTree = ({data, onChange}) => {
    const [id, setId] = useState();
    const [selected, setSelected] = useState(id);
    const jobTodoClickHandler = (event) => {
        let eventId = event.target.id;
        setId(eventId);
        onChange(eventId);
        setSelected(eventId);
        console.log(selected)
        let eventClassList = event.target.classList;
        eventClassList.add("jobTree__link--active")
    };
    const renderItems = data.map((item, index) => {
        let splitWords = item.name.split(' ');
        let firstLetter = splitWords[1].charAt(0).toUpperCase();
        let changedTitle = 
            `${splitWords[0]}${firstLetter}.${splitWords[2]} 
        ${splitWords[3] ? splitWords[3] : ''}`;

        return (
            <p 
                key={index}
                onClick={event => jobTodoClickHandler(event)}
                id={item.id}
                className="jobTree__link"
            >
                {changedTitle}
            </p>
        ) 
    });

    return (
        <div className="jobTree">
            <div className="jobTree__items">
                {renderItems}
            </div>
        </div>
    );
};

export default JobTree;
