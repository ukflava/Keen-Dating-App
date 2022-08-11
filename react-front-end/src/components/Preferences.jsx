import React, { useState, useEffect } from "react";
import axios from "axios";
import PreferenceItem from "./PreferenceItem"
import AgePreferenceItem from "./AgePreferenceItem"

const Preferences = (props) => {
  const [newPref, setNewPref] = useState({})
  const [preferences, setPreferences] = useState({});
  useEffect(() => {
    axios.get('/api/users/1/preferences')
      .then((results) => {
        setPreferences({ ...results.data });
      })
  }, []);

  // Update users preferences state
  // need to pass preference key and new value as obj
  console.log("props", props)

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
        options={props.prefOptions.genders}
        selected={preferences.gender}
        fieldName={"gender_id"}
        />

        <PreferenceItem 
        title="Exercise"
        options={props.prefOptions.exercises}
        selected={preferences.exercise}
        fieldName={"exercise_id"}
        />

        <PreferenceItem 
        title="My location"
        options={props.prefOptions.location}
        selected={preferences.location}
        fieldName={"location"}/>

        <PreferenceItem 
        title="Drinks"
        options={props.prefOptions.drinks}
        selected={preferences.drink}
        fieldName={"drink_id"}/>

        <PreferenceItem 
        title="I'm looking for"
        options={props.prefOptions.dating_goals}
        selected={preferences.dating_goal}/>

        <AgePreferenceItem 
        title="Min age"
        selected={preferences.min_age}/>

        <AgePreferenceItem 
        title="Max age"
        selected={preferences.max_age}/>

        <AgePreferenceItem 
        title="Min height"
        selected={preferences.min_height_in_cm}/>

        <AgePreferenceItem 
        title="Max height"
        selected={preferences.max_height_in_cm}/>

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