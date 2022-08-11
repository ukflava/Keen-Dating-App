import React, { useState } from "react";
import axios from "axios";
import PreferenceItem from "./PreferenceItem"
import AgePreferenceItem from "./AgePreferenceItem"

const Preferences = (props) => {
  const [newPref, setNewPref] = useState({})
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

  const setGenderPref = (gender)=>{
    console.log("built new pref from new gender value", gender)
  }

  // preferences={preferences}
  // setPreferences={setPreferences}
  // prefOptions={prefOption}

  // const mappedPrefOptions = props.preferences?.map((prefOption) => {
  //   return (
  //     <PreferenceItem 
            
  //     />
  //   );
  // });

  // dating_goals, drinks, exercises, genders
  // id, value

  return (
    <section className="user-card-container  border-8 w-full h-screen place-content-center p-5">
      <article className="rounded-md flex flex-col w-full shadow-lg" >
        <div className='flex justify-center items-center pt-10 border-b-2 pb-6 bg-fuchsia-800'>

          <h2 className='text-center pl-1 pr-18 text-2xl bg-fuchsia-800 font-medium text-white'>
            Discovery Preferences
          </h2>
        </div>
        <PreferenceItem 
        title="I'm interested in"
        options={props.prefOptions.gender}
        selected={props.preferences.gender}
        />

        <PreferenceItem 
        title="Exercise"
        options={props.prefOptions.exercise}
        selected={props.preferences.exercise}
        />

        <PreferenceItem 
        title="My location"
        options={props.prefOptions.location}
        selected={props.preferences.location}/>

        <PreferenceItem 
        title="Drinks"
        options={props.prefOptions.drink}
        selected={props.preferences.drink}/>

        <PreferenceItem 
        title="I'm looking for"
        options={props.prefOptions.dating_goal}
        selected={props.preferences.dating_goal}/>

        <AgePreferenceItem 
        title="Min age"
        selected={props.preferences.min_age}/>

        <AgePreferenceItem 
        title="Max age"
        selected={props.preferences.max_age}/>

        <AgePreferenceItem 
        title="Min height"
        selected={props.preferences.min_height_in_cm}/>

        <AgePreferenceItem 
        title="Max height"
        selected={props.preferences.max_height_in_cm}/>

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