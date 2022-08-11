import React from "react";

const PreferenceItem = (props) => {

  return (
    <div className="grid grid-cols-2">
        <div className="col-span-2">
          <button type="button" className="bg-transparent hover:bg-fuchsia-800 text-fuchsia-700 font-semibold hover:text-white py-2 border border-fuchsia-500 hover:border-transparent rounded-full w-full inline-block my-4"
          // onClick={()=> onClickValue({fieldName: option.id})}
          //how to pass a function through a link to this component
          >
            Pref Option
          </button>
        </div>
      </div>
  )
}

export default PreferenceItem;