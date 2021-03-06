import React, {useEffect, useState} from 'react';
import chatIcon from '../../assets/images/pic/unsplash_DItYlc26zVI.png';
import sendPhotoIcon from '../../assets/images/icons/send-img.png';
import socket from '../../services/socket';

const ChatFrame = ({room}) => {
    let [message, setMessage] = useState('');
    let [username, setUsername] = useState('');
    let [isUsername, setIsUsername] = useState(false);

    let timeOptions = {
        hours12: false,
        hour: '2-digit',
        minutes: '2-digit'
    }
    let hours = `${new Date(Date.now()).getHours().toLocaleString('ru', timeOptions)}`;
    let minutes = `${new Date(Date.now()).getMinutes().toLocaleString('ru', timeOptions)}`;

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const confirmUsername = () => {
        setIsUsername(true);
        if (username) {
            socket.auth = {username};
            socket.connect();
        }
    };
        
    const handleChangeInput = (e) => {
        setMessage(e.target.value);
    };

    const sendMessageHandler = () => {
        let messageFull = {
            room: room,
            username: username,
            message: message,
            time: `${hours}:${minutes}`
        }
        socket.emit('sendMessage', messageFull);
    }

    useEffect(
        () => {
            socket.on('receiveMessage', content => {
                console.log(content);
            })
        }
    )

    return (
        <div className='chatFrame'>
            <div className='chatFrame__header'>
                <div className='chatFrame__userInfo'>
                    <img
                        className='chatFrame__userPic' 
                        src={chatIcon}
                        alt='user'
                    />
                    {
                        !isUsername ? (
                            <div>
                                <input 
                                    className='chatFrame__usernameInput'
                                    type='text'
                                    onChange={handleUsername}
                                />
                                <button 
                                    onClick={confirmUsername}
                                    className='chatFrame__usernameSelect'
                                >
                                    OK
                                </button>
                            </div>
                        ) :
                        (
                            <p className='chatFrame__username'>
                                {username}
                            </p>
                        )
                    }
                    <p className='chatFrame__status'>
                        ?????????????? 24 ???????????? ??????????
                    </p>
                </div>
            </div>
            <div className='chatFrame__main'>
            </div>
            <div className='chatFrame__footer'>
                <label htmlFor="messageInput">
                    <input 
                        type='text' 
                        id="messageInput"
                        placeholder='???????????????? ??????????' 
                        className='chatFrame__input'
                        onChange={handleChangeInput}
                    />
                </label>
                <button 
                    className='chatFrame__sendMessage'
                    onClick={sendMessageHandler}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="icon icon-tabler icon-tabler-arrow-up-circle" 
                        width="48" 
                        height="48" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="#ffffff" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="9" />
                        <line x1="12" y1="8" x2="8" y2="12" />
                        <line x1="12" y1="8" x2="12" y2="16" />
                        <line x1="16" y1="12" x2="12" y2="8" />
                    </svg>
                </button>
                <button className='chatFrame__sendPhoto'>
                    <img 
                        src={sendPhotoIcon} 
                        alt="Send" 
                    />
                </button>
            </div>
        </div>
    );
};

export default ChatFrame;
