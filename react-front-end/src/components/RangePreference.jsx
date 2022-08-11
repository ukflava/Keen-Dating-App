import React, {useState} from "react";

const RangePreference = () => {
  const [limit, setLimit] = useState(0)
  return (
    <div className="border-double border-4 grid grid-cols-4 ">

    <label className="form-label col-span-4 pl-5 pt-5 pb-3">
      Title
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

export default RangePreference;