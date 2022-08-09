import React, { useState } from 'react';
import Preferences from './user-preferences';
import axios from 'axios';

function userPreferences() {
  
  // const [preferences, setPreferences] = useState({});
  // // Update users preferences state
  // // need to pass preference key and new value as obj
  // const updatePreferences = () => {
  //   const newPref = {
  //     ...preferences,
  //     location: 'tesrser'
  //   };
  //   console.log('newPref', newPref);
  //   axios.post('/api/users/1/preferences', newPref)
  //   .then((results) => {
  //     console.log('results:', results);
  //     setPreferences({...results.data})
  //   })
  //   .catch(error => console.log(error));
  // };

  return (
    <section className="user-preferences-container border-8 border-red-500 w-full h-screen place-content-center p-5">
      <Preferences />
    </section>
  )
}

export default userPreferences;