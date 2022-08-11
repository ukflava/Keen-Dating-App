import React, { useState, useEffect } from "react";
import axios from "axios";
import PreferenceItem from "./PreferenceItem";
import PreferenceOutput from "./PreferenceOutput";
import RangePreference from "./RangePreference";
const Preferences = (props) => {
  const { preferences, setPreferences } = props;

  useEffect(() => {
    axios.get('/api/users/1/preferences')
      .then((results) => {
        setPreferences({...results.data});
      })
  }, []);

  // Update users preferences state
  // need to pass preference key and new value as obj
  const updatePreferences = () => {
    const newPref = {
      ...preferences,
      location: 'testtt'
    };
    console.log('newPref', newPref);
    axios.post('/api/users/1/preferences', newPref)
      .then((results) => {
        setPreferences({ ...results.data })
      })
      .catch(error => console.log(error));
  };

  const PreferenceItemtitles = ["I'm into",  "Drinking", "Exercise", "I'm looking for", "My location"]

  const RangePreferencetitles =["Minimun Age", "Maximum Age", "Minimum Height", "Maximum Height"]

  const PreferenceOutputArr = Object.values(preferences).slice(0, -4)
  

  const RangePreferenceArr = Object.values(preferences).slice(-4)
  console.log(RangePreferenceArr)

  const PreferenceOutputs = PreferenceOutputArr.map((preference, index) => {
    return(
      <PreferenceOutput 
      key={index}
      title={PreferenceItemtitles[index]}
      selected={preference}
      />
    )
  })

  const RangePreferences = RangePreferenceArr.map((preference, index) => {
    return(
      <RangePreference
      key={index}
      title={RangePreferencetitles[index]}
      selected={preference}
      />
    )
  })

  return (
    <section className="user-card-container  border-8 w-full h-screen place-content-center p-5">
      <article className="rounded-md flex flex-col w-full shadow-lg" >
        <div className='flex justify-center items-center pt-10 border-b-2 pb-6 bg-fuchsia-800'>

          <h2 className='text-center pl-1 pr-18 text-2xl bg-fuchsia-800 font-medium text-white'>
            Discovery Preferences
          </h2>
        </div>
        {PreferenceOutputs}

        {RangePreferences}


        <button
          //onClick={updatePreferences} 
          className="bg-fuchsia-800 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded text-xl">
          Save Changes
        </button>

      </article>
    </section>
  )
}

export default Preferences;