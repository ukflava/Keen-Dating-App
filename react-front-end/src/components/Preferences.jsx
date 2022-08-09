import React, { useState } from "react";
import axios from "axios";
import SettingPreferences from "./SettingPreferences"

const Preferences = (props) => {
  // Update users preferences state
  // need to pass preference key and new value as obj
  console.log("props", props)
  const updatePreferences = (e) => {
    e.preventDefault();
    console.log("setting preferences")
    const newPref = {
      ...props.preferences,
      location: 'testtt'
    };
    console.log('newPref', newPref);
    axios.post('/api/users/1/preferences', newPref)
      .then((results) => {
        props.setPreferences({ ...results.data })
      })
      .catch(error => console.log(error));
  };
  const title = ["I'm into", "Change location", "Drinking", "Exercise", "I'm looking for", "Minimun Age", "Maximum Age", "Minimum Height", "Maximum Height"]
  // const userPreferences = []
  
  // for (const preference in props.preferences) {
  //   userPreferences.push(
  //     <SettingPreferences title={"I'm into"} option={props.preferences[preference]}/>
  //   )
  // }

  const userPreferences = Object.values(props.preferences).map((preference, index) => {
    return (   
      <SettingPreferences title={title[index]} option={preference}/>
    )
  }) 

  return (
    <section className="user-card-container  border-8 w-full h-screen place-content-center p-5">
      <article className="rounded-md flex flex-col w-full h-full shadow-lg mt-40" >
        <div className='flex justify-center items-center pt-10 border-b-2 pb-6 bg-fuchsia-700'>

          <h2 className='text-center pl-1 pr-18 text-2xl bg-fuchsia-700 font-medium text-white'>
            Discovery Preferences
          </h2>
        </div>

        {userPreferences}

        <button
        //onClick={updatePreferences} 
        class="bg-fuchsia-700 hover:bg-fuchsia-800 text-white font-bold py-2 px-4 rounded text-xl">
          Save Changes
        </button>

      </article>
    </section>
  )
}

export default Preferences;