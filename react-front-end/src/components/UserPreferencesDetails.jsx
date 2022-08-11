import React from "react";
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
  const location = useLocation()
  //cannot pass function as state in react router (onChange)
  //how to do this?
  const { options, title, selected} = location.state;
  // const userOption =
  const helper = (newValue) => {
    console.log('coming in helper', newValue);
    const testPref = {...props.newPref, testGender: newValue};
    props.setNewPref({...testPref});
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
          onClick={()=> helper(option.value)}
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