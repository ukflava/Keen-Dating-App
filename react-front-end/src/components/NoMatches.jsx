import { Link } from 'react-router-dom';

const NoMatches = () => {
  return (
    <div className='no-users-left-container whitespace-pre-line flex flex-col'>
      <div className="no-more-text my-1">
        Sorry, you have no matches yet. <br/>
        When you match with other users, they will appear here where you can send them a message.
      </div>
      <button className='bg-fuchsia-800 text-white font-semibold rounded-md px-2 py-1 my-1'><Link to='/' className='bg-fuchsia-800'>Start Liking</Link></button>
    </div>
  )
}

export default NoMatches;