import { useState, useEffect } from 'react';
import InputArea from './InputArea';
import MessageBubble from './MessageBubble';
import axios from 'axios';
////// divide socetIO part
import io from 'socket.io-client';

//////
const ChatRoom = (props) => {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filterMsgs = props.matchesData[props.selected.id].messages.filter(msg => msg.to_user_id === props.selected.id || msg.from_user_id === props.selected.id);
    setFiltered([...filterMsgs]);
  }, [props.matchesData, props.selected.id, props.allMessages]);

  ////////socket.io useEffect
  // useEffect(() => {
  //   const socket = io();
  //   setSocket(socket)
  //     socket.on('connect', () => {
  //     const data = {id: props.user.id, name: props.user.name,}
  //     console.log('data on client', data);
  //     socket.emit('user', data);
  //   });

  //   socket.on('disconnect', () => {
  //   });

  //   socket.on("message", (message) => {
  //     console.log('message back from server', message);
  //     console.log('my id', props.user.id, 'selected.id', props.selected.id);
  //     // need to check props.selected.id 
  //     if (message.from_user_id === props.user.id && message.to_user_id === props.selected.id ) {
  //       setMessagesHistory((prev) => [...prev, message]);
  //       props.setAllMessages([...props.allMessages, message]);
  //       props.setMessageSent(Date.now());
  //     }
  //     else if (message.from_user_id === props.selected.id && message.to_user_id === props.user.id) {
  //       setMessagesHistory((prev) => [...prev, message]);
  //       props.setAllMessages([...props.allMessages, message]);
  //       props.setMessageSent(Date.now());
  //     }
  //   //  else return
  //   });

  //   // clean up
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  // map over message history and render messages on screen
  const renderedMsgs = filtered?.map((msg) => {
    return (
      <MessageBubble
        key={msg.id}
        id={msg.id}
        content={msg.message}
        to={msg.to_user_id}
        toName={props.selected.name}
        from={msg.from_user_id}
        userName={props.user.name}
        userId={props.user.id}
        date={msg.date_sent}
        message_seen={msg.message_seen}
      />
    )
  });

  // REMOVE SOCKET PING
  return (
    <>
      <div className='bg-white chat-room-container flex flex-col-reverse'>
        <div className="chat-bubble-container bg-white flex flex-col px-4 py-4">
          {renderedMsgs}
        </div>
      </div>
      <InputArea selected={props.selected} user={props.user} message={props.message} setMessage={props.setMessage} sendToServer={props.sendToServer} />
    
    </>
  );
};

export default ChatRoom;

