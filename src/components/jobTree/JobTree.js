import React, {useState} from 'react';

const JobTree = ({data, onChange}) => {
    let [selected, setSelected] = useState('');

    const jobTodoClickHandler = (event) => {
        let eventId = event.target.id;
        let targetClassList = event.target.classList;
        onChange(eventId);
        setSelected(eventId);
    };
    const renderItems = data.map((item, index) => {
        let splitWords = item.name.split(' ');
        let firstLetter = splitWords[1].charAt(0).toUpperCase();
        let changedTitle = 
            `${splitWords[0]}${firstLetter}.${splitWords[2]} 
        ${splitWords[3] ? splitWords[3] : ''}`;

        return (
                <button 
                    type="button"
                    key={index}
                    onClick={event => jobTodoClickHandler(event)}
                    id={item.id}
                    className={`jobTree__link ${selected == item.id 
                            ? "jobTree__link--active" : ""}`}
                >
                    {changedTitle}
                </button>
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
