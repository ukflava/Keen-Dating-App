import React, {useState, useEffect} from "react";
import axios from "axios";
import { useLocation } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { propTypes } from "react-tinder-card";
import * as ROUTES from './routes';

const UserPreferencesDetails = (props) => {
  const [preferences, setPreferences] = useState({});
  useEffect(() => {
    axios.get('/api/users/1/preferences')
      .then((results) => {
        setPreferences({ ...results.data });
      })
  }, []);

  const updatePreferences = (newValue) => {
    console.log("setting preferences")
    const newPref = {
      ...preferences,
      fieldName: newValue
    };
    console.log('newPref', newPref);
    axios.post('/api/users/1/preferences', newPref)
      .then((results) => {
        props.setPreferences({ ...results.data })
        console.log("success")
      })
      .catch(error => console.log(error));
  };

  const location = useLocation()
  //cannot pass function as state in react router (onChange)
  //how to do this?
  const { options, title, selected, fieldName} = location.state;
  console.log("prefffff", location.state)
  // const userOption =
  const onClickValue = (newValue) => {
    console.log('coming in helper', newValue);
    updatePreferences(newValue)
  };
  
  const renderedOptions = options.map(option => {
    let className = "bg-transparent hover:bg-fuchsia-800 text-fuchsia-700 font-semibold hover:text-white py-2 border border-fuchsia-500 hover:border-transparent rounded-full w-full inline-block my-4";
    if (selected === option.value) {
      className += ""
      //add highlight classes
    }
    
    return (
      <div className="grid grid-cols-2">
        <div className="col-span-2">
          <button type="button" className={className}
          onClick={()=> onClickValue({fieldName: option.id})}
          //how to pass a function through a link to this component
          >
            {option.value}
          </button>
        </div>
      </div>
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
        <div className="flex col-span-2">
          <Link to={ROUTES.PREF}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-11 hover:text-fuchsia-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg></Link>
          <p className="pt-10 pb-10 pl-2 text-xl font-medium">
            {location.state.title} 💜
          </p>
        </div>
        {renderedOptions}

      </article>
    </section>
  )
}

export default UserPreferencesDetails;