import React  from 'react';

const ChatRoomsTab = ({name, selected, onChange, socket}) => {
    const handleChange = (event) => {
        onChange(event.target.id);
        socket.emit('joinRoom', event.target.id);
    };

    return (
        <button 
            id={name} 
            className={`chatRoomsTab ${selected 
                    ? 'chatRoomsTab--active' 
                    : ''
            }`} 
            onClick={handleChange}
        >
            {name}
        </button>
    );
};

export default ChatRoomsTab;
