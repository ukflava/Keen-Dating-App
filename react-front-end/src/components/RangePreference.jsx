import React, { useState } from "react";

const RangePreference = (props) => {
  const { selected, title } = props

  const [limit, setLimit] = useState(selected)

  if (selected >= 100) {
    return (
      <div className="border-double border-4 grid grid-cols-4 ">

      <label className="form-label col-span-4 pl-5 pt-5 pb-3">
        {title}
      </label>
      <input
        value={limit}
        onChange={(event) => { setLimit(event.target.value) }}
        type="range"
        min="100"
        max="200"
        className="col-span-4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mb-4 mx-5" />

      <p className="pl-5 pb-2 text-gray-500 text-sm col-span-4">
        {limit}
      </p>
    </div>
    )
  }
  return (
    <div className="border-double border-4 grid grid-cols-4 ">

      <label className="form-label col-span-4 pl-5 pt-5 pb-3">
        {title}
      </label>
      <input
        value={limit}
        onChange={(event) => { setLimit(event.target.value) }}
        min="18"
        max="99"
        type="range"
        className="col-span-4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 mb-4 mx-5" />

      <p className="pl-5 pb-2 text-gray-500 text-sm col-span-4">
        {limit}
      </p>
    </div>
  )
}

export default RangePreference;