import { Client } from 'socket.io-client';

const socket = new Client('http://localhost:8080/ws');

export const connectWebSocket = () => {
  socket.connect();
  
  socket.on('connect', () => {
    console.log('Connected to WebSocket server');
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket server');
  });

  return socket;
};

export const disconnectWebSocket = () => {
  socket.disconnect();
};

export const sendTask = (task) => {
  socket.emit('task', task);
};
