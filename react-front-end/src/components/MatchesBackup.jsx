import React from "react";
import Conversation from "./Conversation";
import MatchBubble from './MatchBubble';
import {useState} from 'react';

export default function Matches(props) {
  const [selected, setSelected] = useState(null);

  // Click handler to set current view/chat 
  const selectHandler = (matchObj) => {
    setSelected(matchObj);
  };

  // map over list of confirmed matches and display bubbles
  const match = props.matches?.map(match => {
    return (
      <MatchBubble 
        key={match.id}
        match={match}
        matchId={match.id}
        matchName={match.name}
        allMessages={props.allMessages}
        photos={match.photos}
        userId={props.state.user}
        selected={selected}
        selectHandler={selectHandler}
      />
    );
  });

  return (
    <div className='outer-most-matches-div grid'>
      <Conversation selected={selected} user={props.state.user} allMessages={props.allMessages} setAllMessages={props.setAllMessages} messageSent={props.messageSent} setMessageSent={props.setMessageSent}/>
      <div className="bg-white test-list flex flex-col border border-gray-300 py-3">
          {match? match : "loading"}
      </div>
    </div>
  );
};





// return (
// <>
// <section className="w-full place-content-center p-5 ">


// <div className="grid grid-cols-5 rounded-3xl p-5 gap-3 w-2/3 mx-auto shadow-xl border-double border-2 border-spacing-3 border-fuschia-50">
//   <div className="rounded-3xl grid-flow-row space-y-4" >{match? match : "loading"}</div>

// </div>

// </section>

// </>
// )
