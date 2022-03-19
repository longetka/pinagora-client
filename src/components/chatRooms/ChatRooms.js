import React, {useState} from 'react';
import ChatRoomsTab from '../chatRoomsTab/ChatRoomsTab';

const ChatRooms = ({rooms, onChange}) => {
    let [roomId, setRoomId] = useState('');

    const handleClick = (id) => {
        setRoomId(id);
        onChange(id);
    }

    const renderRoomTab = rooms.map((room, index) => {
        return (
            <ChatRoomsTab 
                name={room} 
                key={index}
                selected={roomId === room}
                onChange={handleClick}
            />
        )
    })
    return (
        <div className='chatRooms'>
            {renderRoomTab} 
        </div>
    );
};

export default ChatRooms;
