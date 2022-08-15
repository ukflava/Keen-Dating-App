import { Link } from 'react-router-dom';

const NoMatches = () => {
  return (
    <div className='no-users-left-container whitespace-pre-line flex flex-col items-center'>
      <div className="no-more-text my-1">
        Sorry, you have no matches yet. <br/>
        When you match with other users, they will appear here where you can send them a message.
      </div>
      <Link to='/' className='bg-fuchsia-800 rounded-md py-1 my-2 w-1/3'><button className='bg-fuchsia-800 text-white font-semibold rounded-md py-1 my-1'>Start Liking</button></Link>
    </div>
  )
}

export default NoMatches;