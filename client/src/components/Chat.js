import React from 'react';
import requireAuth from './requireAuth';

const Chat = () => (
    <div>Chat</div>
)

export default requireAuth(Chat);