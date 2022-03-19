import React, {useState} from 'react';
import ChatFrame from '../../components/chatFrame/ChatFrame';
import ChatRooms from '../../components/chatRooms/ChatRooms';
import NavAppField from '../../components/navAppField/NavAppField';

const chatRooms = ['Wife', 'Daughter', 'Son'];

const Chat = () => {
    let [selectedRoom, setSelectedRoom] = useState('');

    const handleSelectedRoom = (room) => {
        setSelectedRoom(room);
    }

    return (
        <div className='chat' >
            <div className='chat__wrapper'>
                <ChatRooms 
                    rooms={chatRooms} 
                    onChange={handleSelectedRoom} 
                />
                <ChatFrame 
                    room={selectedRoom}
                />
                <div></div>
            </div>
            <NavAppField />
        </div>
    );
};

export default Chat;
