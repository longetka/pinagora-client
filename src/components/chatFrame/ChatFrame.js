import React, {useEffect, useState} from 'react';
import chatIcon from '../../assets/images/pic/unsplash_DItYlc26zVI.png';
import sendPhotoIcon from '../../assets/images/icons/send-img.png';

const ChatFrame = ({socket, room}) => {
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
    };
        
    
    const handleChangeInput = (e) => {
        setMessage(e.target.value);
    };

    const sendMessageHandler = async () => {
        let messageFull = {
            room: room,
            username: username,
            message: message,
            time: `${hours}:${minutes}`
        }
        if (username && message !== '') {
            await socket.emit('sendMessage', messageFull);
        }
    }

    useEffect(() => {
        socket.on('receiveMessage', (data) => {
            console.log(data);
        })
    }, [socket]);
    return (
        <div className='chatFrame'>
            <div className='chatFrame__header'>
                <div className='chatFrame__userInfo'>
                    <img
                        className='chatFrame__userPic' 
                        src={chatIcon}
                        alt='userPic'
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
                        Заходил 24 минуты назад
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
                        placeholder='Напишите текст' 
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
                        alt="Send Photo" 
                    />
                </button>
            </div>
        </div>
    );
};

export default ChatFrame;
