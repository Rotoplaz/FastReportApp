import { io } from 'socket.io-client';

const BASE_URL =  process.env.EXPO_PUBLIC_BACKEND_URL;

export function connectSocket(namespace: string, token?: string | null) {
    return io(`${BASE_URL}/${namespace}`, {
        transports: ['websocket'],
        autoConnect: true,
        auth: {
            token: `Bearer ${token}`,
        },
    });
}