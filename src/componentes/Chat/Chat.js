import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import './styles.css';

let socket;


const Chat = ({ location }) => {

  const [name, setName] = useState('');

  const [room, setRoom] = useState('');

  const [users, setUsers] = useState('');

  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState([]);

  const ENDPOINT ='https://chat-app-socketio1.herokuapp.com/'



  useEffect(() => {

    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);

    setName(name)

    socket.emit('join', { name, room }, (error) => {

      if(error) {

        alert(error);

      }

    });

  }, [ENDPOINT, location.search]);

  

  useEffect(() => {

    socket.on('message', message => {

      setMessages(messages => [ ...messages, message ]);

    });

    

    socket.on("roomData", ({ users }) => {

      setUsers(users);

    });

}, []);



  const sendMessage = (event) => {

    event.preventDefault();



    if(message) {

      socket.emit('sendMessage', message, () => setMessage(''));

    }

  }



  return (

    <div className="outerContainer">

      <div className="container">

          <h1 style={{margin: "20px"}}>{room}</h1>

          <Messages messages={messages} name={name} />

          <Input messages={messages} message={message} setMessage={setMessage} sendMessage={sendMessage} />

      </div>

      <TextContainer users={users}/>

    </div>

  );

}



export default Chat;