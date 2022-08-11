import React from "react"

const PreferenceOption = (props) => {
  console.log("props------0", props)
  const renderedOptions = props.value.map(option => {
    let className = "bg-transparent hover:bg-fuchsia-800 text-fuchsia-700 font-semibold hover:text-white py-2 border border-fuchsia-500 hover:border-transparent rounded-full w-full inline-block my-4";
    if (props.current === props.value) {
      className += ""
      //add highlight classes
    }
    
    return (
      <div className="grid grid-cols-2">
        <div className="col-span-2">
          <button type="button" className={className}
          // onClick={()=> helper(option.value)}
          //how to pass a function through a link to this component
          >
            {props.value}
          </button>
        </div>
      </div>
    )
  })
  return (

    <div>
        <div className="flex col-span-2">

          <p className="pt-10 pb-10 pl-2 text-xl font-medium">
            {props.title} 💜
          </p>
        </div>

        {renderedOptions}

      
    </div>
  )
};

export default PreferenceOption;