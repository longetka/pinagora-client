import React, {useState} from 'react';
import io from 'socket.io-client';
import ChatFrame from '../../components/chatFrame/ChatFrame';
import ChatRooms from '../../components/chatRooms/ChatRooms';
import NavAppField from '../../components/navAppField/NavAppField';

const socket = io.connect('http://localhost:8080');
const chatRooms = ['Wife', 'Daughter', 'Son'];

const Chat = () => {
    let [message, setMessage] = useState('');
    let [room, setRoom] = useState('');

    return (
        
        <div className='chat' >
            <div className='chat__wrapper'>
                <ChatRooms rooms={chatRooms} socket={socket}/>
                <ChatFrame 
                    socket={socket}
                    room={chatRooms[0]}
                />
                <div></div>
            </div>
            <NavAppField />
        </div>
    );
};

export default Chat;
