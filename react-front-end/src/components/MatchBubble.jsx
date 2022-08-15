import moment from 'moment';
import axios from 'axios';

const MatchBubble = (props) => {
  const selectHelper = () => {
    const lastMsg = props.matchData.messages[props.matchData.messages.length - 1];

    if (!props.matchData.seen || !props.matchData.messages.length === 0) {
      props.selectHandler(props.matchData);
      const userSeen = {
        matchId: props.matchData.id,
        tableId: props.matchData.seen_ref_id,
        seen: true
      };
      axios.post('/api/users/matchings/update', userSeen)
        .then((results) => {
          props.setSeenUpdate(Date.now());
        })
        .catch((error) => console.log('error', error));
    };

    if (!lastMsg) {
      props.selectHandler(props.matchData);
    };

    if (!lastMsg.message_seen) {
      const msgUpdate = {
        ...lastMsg,
        message_seen: true,
      };
      console.log('msgupdate', msgUpdate);
      axios.post('/api/users/messages/seen', msgUpdate)
        .then((results) => {
          props.setSeenUpdate(Date.now());
        })
        .catch((error) => console.log('error', error));
    };
    props.selectHandler(props.matchData);
  };
  
  // Catch error render
  if (!props.matchData) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="match-bubble-container bg-white flex w-full px-2 items-center my-1" onClick={() => selectHelper()}>
      <div className="match-bubble-img-wrapper bg-white min-w-max">
          <img src={props.matchData.photos[0].url} alt="thumbnail" className="w-6 h-6 rounded-full match-bubble-img object-cover" />
      </div>

      <div className="match-bubble-info flex flex-col w-full bg-white px-2 cursor-pointer">
        <div className={`match-bubble-name bg-white text-[0.75rem] 
       ${ 
        !props.matchData.seen
          ? 'font-bold' 
          : props.matchData.messages.length > 0 && (!props.matchData.messages[props.matchData.messages.length - 1].message_seen && props.matchData.messages[props.matchData.messages.length - 1].from_user_id !== props.userId?.id)
          ? 'font-bold'
          : ''}
        `}>
          {props.matchData.name}
        </div>
        <div className={`match-bubble-msg bg-white text-gray-400 font-light text-[0.6rem] flex items-center`}>
          <span className={`bg-white max-w-max justify-self-start
          ${ !props.matchData.seen
            ? 'font-bold' 
            : props.matchData.messages.length > 0 && (!props.matchData.messages[props.matchData.messages.length - 1].message_seen && props.matchData.messages[props.matchData.messages.length - 1].from_user_id !== props.userId?.id)
            ? 'font-bold'
            : ''}
          `}>
            { props.matchData.messages.length < 1
              ? `Say Hi to ${props.matchData.name}`?.substring(0, 20)
              :  props.matchData.messages[props.matchData.messages.length - 1]?.message?.substring(0, 30)
            }
          </span> 
          <span className='bg-white max-w-max justify-self-center text-[3px] ml-1'>
            { props.matchData.messages.length > 1
             ? '\u25CF'
             : ''
             }
          </span> 
          <span className='bg-white max-w-max3 justify-self-end ml-1'>
            { props.matchData.messages.length > 0
              ? moment(props.matchData.messages[props.matchData.messages.length - 1]?.date_sent).format('ddd h:mm a')
              : ''
            }
          </span>
        </div>
      </div>
      { !props.matchData.seen
          ? <div className='bg-white text-fuchsia-800 text-sm'>
              {'\u25CF'}
            </div>
          : props.matchData.messages.length > 0 && (!props.matchData.messages[props.matchData.messages.length - 1].message_seen && props.matchData.messages[props.matchData.messages.length - 1].from_user_id !== props.userId?.id)
          ? <div className='bg-white text-fuchsia-800 text-sm'>
              {'\u25CF'}
            </div>
          : <></>
      }
    </div>
  )
};

export default MatchBubble;