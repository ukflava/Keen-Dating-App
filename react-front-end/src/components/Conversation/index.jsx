import MatchHeader from './MatchHeader';
import ChatRoom from './ChatRoom';
import { useState } from 'react';
import UserCardContainer from '../UserCardContainer';

const Conversation = (props) => {
  const [ seeProfile, setSeeProfile ] = useState({})

  const goBack = () => {
    const status = false;
    setSeeProfile({...seeProfile, status});
  }

  // call <userCardcontainer seeProfile={seeProfile} />
  // if check to render in the usercard container then use seeProfile info to render shit
   

  if (seeProfile.status) {
    return (
      <div className="keen-tinder-card w-full rounded-xl drop-shadow-2xl">
        <button onClick={goBack}></button>
      <UserCardContainer
        key={props.selected.id}
        id={props.selected.id}
        name={props.selected.name}
        age={props.selected.age}
        bio={props.selected.bio}
        education={props.selected.education}
        occupation={props.selected.occupation}
        location={props.selected.location}
        goal={props.selected.dating_goal}
        drinks={props.selected.drink}
        exercises={props.selected.exercises}
        gender={props.selected.value}
        height={props.selected.height_in_cm}
        isActive={props.selected.is_active}
        photos={props.selected.url}
      />
    </div>
    )
  }
  return (
    <div className='conversation-container grid border border-gray-300'>
      { props.selected 
        ? <>
          <MatchHeader selected={props.selected} setSeeProfile={setSeeProfile}/>
          <ChatRoom selected={props.selected} user={props.user} allMessages={props.allMessages} setAllMessages={props.setAllMessages}  messageSent={props.messageSent} setMessageSent={props.setMessageSent}/>
          </>
        : <div className='none-selected'> Send a message to one of your matches </div>
      }
    </div>
  )
};

export default Conversation;