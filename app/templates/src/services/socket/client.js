import io from 'socket.io-client';
import { host } from '../../config';

const socket = io.connect(host, { reconnect: true });

const service = {
    registerReceiveMessage(cb) {
        socket.on('receiveMessage', cb);
    },
    unRegisterReceiveMessage(cb) {
        socket.removeListener('receiveMessage', cb);
    },
    emitNewUser(newSession, cb) {
        socket.emit('newUser', newSession, cb);
    },
    newUser(value, cb) {
        socket.emit('newMessage', value, cb);
    }
};

export default service;
