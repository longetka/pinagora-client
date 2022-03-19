import io from 'socket.io-client';

const URL = 'http://localhost:8080';
const socket = io.connect(URL, {autoConnect: false});

export default socket;
