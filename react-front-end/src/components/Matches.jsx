import React from "react";
import Conversation from "./Conversation";
import MatchesListHeader from './MatchesListHeader';
import MatchBubble from './MatchBubble';
import NoMatches from "./NoMatches";
import VidRoom from "./VidRoom";
import {useState, useEffect, useRef} from 'react';
import io from 'socket.io-client';
import Peer from 'peerjs';

export default function Matches(props) {
  const [selected, setSelected] = useState(null);
  const [matchesData, setMatchesData] = useState({});
  const [socket, setSocket] = useState();
  const [message, setMessage] = useState('');
  const [matchIds, setMatchIds] = useState([]);
  const [roomOpen, setRoomOpen] = useState(false);
  const [roomId, setRoomId] = useState(4);

  // Click handler to set current view/chat 
  const selectHandler = (matchObj) => {
    setSelected(matchObj);
  };

  // Building new form of matches data with filtered messages
  useEffect(() => {
    const data = {};
    const arr = [];
    for (const match of props.matches) {
      data[match.id] = {
        id: match.id,
        name: match.name,
        seen: match.seen,
        seen_ref_id: match.seen_ref_id,
        photos: [...match.photos],
        messages: props.allMessages.filter(msg => msg.to_user_id === match.id || msg.from_user_id === match.id)
      };
      arr.push(match.id);
    };

    setMatchesData({...data});
    setMatchIds([...arr]);
  }, [props.allMessages, props.matches, selected]);

  const [peer, setPeer] = useState(null);
  const [remotePeerId, setRemotePeerId] = useState(null);
  const peerInstance = useRef(null);
  const remoteVideoRef = useRef(null);
  const currentUserVideoRef = useRef(null);

  // socket io handlers
  useEffect(() => {
    if (!props.user.id) {
      console.log('undefined connection');
      return;
    };

    console.log('initializing socket connection');
    const socket = io();
    setSocket(socket);
    const myPeer = new Peer();
    socket.on('connect', () => {
      myPeer.on('open', (peerId) => {
        setPeer(peerId);
        const data = {id: props?.user?.id, name: props?.user?.name, peerId}
        socket.emit('user', data);
        // socket.emit('join-room', roomId, peerId);
      });
      // const data = {id: props?.user?.id, name: props?.user?.name,}
      // socket.emit('user', data);
    });

    socket.on('disconnect', () => {
      console.log('disconnected from client');
    });

    socket.on("message", (message) => {
      if (message.from_user_id === props.user.id || message.to_user_id === props.user.id) {
        props.setAllMessages(prev => [...prev, message]);
      }
    });

    socket.on('remote-user', (remoteUserId, remoteId) => {
      console.log('peer', peer);
      if (remoteId !== peer) {
        setRemotePeerId(remoteId);
      }
    });

    myPeer.on('call', (call) => {
      const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      getUserMedia({video: true, audio: true}, (mediaStream) => {
        currentUserVideoRef.current.srcObject = mediaStream;
        currentUserVideoRef.current.play();
        call.answer(mediaStream);
        call.on('stream', (remoteStream) => {
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      })
    });

    peerInstance.current = myPeer;
    // clean up
    return () => {
      socket.disconnect();
    };
  }, [props.user.id]);

  const startCall = () => {
    console.log('clicked');
    setRoomOpen(true);
    socket.emit('find-user', selected.id);
  };

  const call = (remoteId) => {
    const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    getUserMedia({video: true, audio: true}, (mediaStream) => {

      currentUserVideoRef.current.srcObject = mediaStream;
      currentUserVideoRef.current.play();

      const call = peerInstance.current.call(remoteId, mediaStream);

      call.on('stream', (remoteStream) => {
        remoteVideoRef.current.srcObject = remoteStream;
        remoteVideoRef.current.play();
      });
    });
  };

  // gets called when send button is clicked
  const sendToServer = () => {
    if (message) {
      const msgData = {
        from_user_id: props.user.id,
        message: message,
        to_user_id: selected.id,
        message_seen: false,
        date_sent: Date.now()
      };
      socket.emit('sendMessage', msgData);
      setMessage('');
    } else {
      console.log('need to type something');
    }
  };

  // sendToServer fucntion but for giphy
  const sendGiphyToServer = (url) => {
    if (url) {
      const msgData = {
        from_user_id: props.user.id,
        message: url,
        to_user_id: selected.id,
        message_seen: false,
        date_sent: Date.now()
      };
      socket.emit('sendMessage', msgData);
      setMessage('');
    } else {
      console.log('need to type something');
    }
  };

  if (props.matches.length === 0) {
    return (
      <section className="user-card-container w-full place-content-center">
        <NoMatches />
      </section>
    )
  }

  // map over list of confirmed matches and display bubbles
  const match = props.matches?.map(match => {
    return (
      <MatchBubble
        key={match.id}
        matchData={matchesData[match.id]}
        userId={props.user}
        selectHandler={selectHandler}
        selected={selected}
        seenUpdate={props.seenUpdate} 
        setSeenUpdate={props.setSeenUpdate}
        setMatchesData={setMatchesData}
        setMessageSent={props.setMessageSent}
      />
    );
  });

  return (
    <div className='relative outer-most-matches-div grid'>
      <Conversation 
        selected={selected} 
        user={props.user} 
        sendToServer={sendToServer}
        allMessages={props.allMessages} 
        setAllMessages={props.setAllMessages} 
        setMessageSent={props.setMessageSent}
        message={message}
        setMessage={setMessage}
        matchesData={matchesData}
        sendGiphyToServer={sendGiphyToServer}
        startCall={startCall}
      />
      {roomOpen
        ?     <div className='absolute inset-0 z-50 bg-gray-500/60 flex flex-col items-center justify-center'>
      <div className="bg-transparent flex flex-col w-2/3 h-4/5">
      <div className="flex bg-transparent justify-between">
        <button onClick={() => setRoomOpen(false)} type="button" className="text-white bg-fuchsia-800 px-2 oy-1 rounded-full max-w-max mb-2">
            X
        </button>
        <button onClick={() => call(remotePeerId)} type="button" className="text-white bg-fuchsia-800 px-2 oy-1 rounded-full max-w-max mb-2">
          Start
        </button>
      </div>

        <div className="video-grid bg-white h-full">
          <div className="my-video border border-fuchsia-800">
            <video ref={currentUserVideoRef}/>
          </div>
          <div className="match-video border border-red-500">
            <video ref={remoteVideoRef} />
          </div>
        </div>
      </div>
    </div>
        : <></>
      }
      <MatchesListHeader user={props.user} />
      <div className="bg-white matches-bubble-list flex flex-col border-l border-t border-b border-gray-300 py-1">
        {match ? match : "loading"}
      </div>
    </div>
  );
};
