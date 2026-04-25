Building a Real-Time Chat Application with Socket.io and MERN
Sindoojagajam
Sindoojagajam

Follow
4 min read
·
Feb 10, 2025
6


2





In today’s digital landscape, real-time communication is a cornerstone of modern web applications. Whether it’s for customer support, gaming, or social networking, the ability to send and receive messages instantly is critical. In this article, we’ll explore how to build a real-time chat application using Socket.io alongside the MERN stack — MongoDB, Express.js, React.js, and Node.js.

Why Socket.io and MERN?
Socket.io simplifies real-time communication by enabling bidirectional, event-driven interactions between the client and server. Combined with the robust MERN stack, you can create a full-fledged application with real-time capabilities and a strong backend.

Prerequisites
Before diving into the implementation, ensure you have the following:

Basic knowledge of JavaScript and Node.js.
Familiarity with React.js.
Node.js and npm installed.
MongoDB installed or access to a cloud instance like MongoDB Atlas.
Architecture
Press enter or click to view image in full size

Setting Up the Project
We’ll structure our project into two main folders: server and client.

Create the Project Directory:
mkdir realtime-chat-app
cd realtime-chat-app
mkdir server client
Initialize the Server:
cd server
npm init -y
npm install express mongoose socket.io cors
Initialize the Client:
cd ../client
npx create-react-app .
npm install socket.io-client
Building the Backend (Node.js & Express)
Setting up the Express Server:
In server/index.js:
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/chatApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const messageSchema = new mongoose.Schema({
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    chatRoom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ChatRoom',
        required: true
    },
    readBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Message = mongoose.model('Message', messageSchema);

io.on('connection', (socket) => {
    console.log('New user connected:', socket.id);

    socket.on('send_message', async (data) => {
        const newMessage = new Message(data);
        await newMessage.save();

        io.emit('receive_message', data);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    });
});

server.listen(5000, () => console.log('Server running on port 5000'));
Building the Frontend (React.js)
Setting Up the Client:

In client/src/App.js:
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:5000');

function App() {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });
    }, []);

    const sendMessage = () => {
        if (message.trim() && username.trim()) {
            const newMessage = { username, content: message };
            socket.emit('send_message', newMessage);
            setMessage('');
        }
    };

    return (
        <div className="App">
            <h1>Real-Time Chat App</h1>
            <input 
                type="text" 
                placeholder="Enter username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="Enter message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()} 
            />
            <button onClick={sendMessage}>Send</button>

            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        <strong>{msg.username}: </strong>{msg.content}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
Styling the Chat App:

In client/src/App.css:
.App {
    text-align: center;
    margin: 20px;
}

input {
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.messages {
    margin-top: 20px;
    border: 1px solid #ddd;
    padding: 10px;
    max-height: 300px;
    overflow-y: scroll;
}

.message {
    margin: 5px 0;
    padding: 5px;
    background-color: #f1f1f1;
    border-radius: 5px;
}
Real-time Message Flow
Press enter or click to view image in full size

Running the Application
Start the Server:

cd server
node index.js
Start the Client:

cd ../client npm start
Visit http://localhost:3000 in your browser, and you should have a fully functional real-time chat application!

Enhancements and Features
User Authentication: Integrate JWT for secure login and user identification.
Persistent Chat History: Retrieve past messages from MongoDB on user login.
Private Messaging: Implement rooms or private channels for one-on-one chats.
Typing Indicators: Notify users when someone is typing.
Message Read Receipts: Show when messages are read.
Final Thoughts
Building a real-time chat application with Socket.io and the MERN stack provides an excellent opportunity to understand event-driven programming and full-stack development. This project not only introduces real-time capabilities but also offers a solid foundation to build more complex applications.

Become a Medium member
If you found this tutorial helpful, consider sharing it with others. Stay tuned for more exciting projects and enhancements.

Happy coding!