import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as ROUTES from './routes';

const SettingPreferences = (props) => {
  const [limit, setLimit] = useState(props.option)

  if (typeof props.option !== "number") {
    return (<Link to={ROUTES.USERPREF} state={{ title: props.title, options: props.option }}>

      <div className="border-double border-4 grid grid-cols-4">
        <p className="pl-5 pt-5 col-span-3">
          {props.title}
        </p>

        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-fuchsia-800 mt-8 ml-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>

        <p className="pl-5 pb-2 text-gray-500 text-sm col-span-4">
          {props.option}
        </p>
      </div>
    </Link>
    )
  }

  if(props.title === "Minimum height" || "Maximum height") {
    return (
      <div className="border-double border-4 grid grid-cols-4 ">

      <label className="form-label col-span-4 pl-5 pt-5 pb-3">
        {props.title}
      </label>
      <input
        value={limit}
        onChange={(event) => { setLimit(event.target.value) }}
        type="range"
        min="100" 
        max="200"
        className="col-span-4 h-2 text-fuchsia-800 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mb-4 mx-5" />

      <p className="pl-5 pb-2 text-gray-500 text-sm col-span-4">
        {limit}
      </p>
    </div>
    )
  }

  return (
    <div className="border-double border-4 grid grid-cols-4 ">

      <label className="form-label col-span-4 pl-5 pt-5 pb-3">
        {props.title}
      </label>
      <input
        value={limit}
        onChange={(event) => { setLimit(event.target.value) }}
        type="range"
        className="col-span-4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mb-4 mx-5" />

      <p className="pl-5 pb-2 text-gray-500 text-sm col-span-4">
        {limit}
      </p>
    </div>

  )
}

export default SettingPreferences