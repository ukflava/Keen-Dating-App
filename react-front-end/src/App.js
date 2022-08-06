import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [state, setState] = useState({});
  
  // promise chain for setting initial states
  // Depency: Will likely depend on swiping state
  useEffect(() => {
    Promise.all([
      axios.get('/api/users/1/all'),
      axios.get('/api/users/1'),
      axios.get('/api/users/1/messages'),
      axios.get('/api/users/1/likedBy'),
      axios.get('/api/users/1/matchings')
    ])
    .then((all) => {
      console.log('all', all);
      setState({...state, users: all[0].data, user: all[1].data, messages: all[2].data, likedBy: all[3].data, matches: all[4].data});
    }) 
  }, []);

  const swipeUser = (toId, like) => {
    axios.post('/api/users/1/matchings', {toId, like})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <button>
        unused button
      </button>        
      <button onClick={() => swipeUser(3, true)}> 
        Post Data       
      </button>        
    </div>
  );
}

export default App;