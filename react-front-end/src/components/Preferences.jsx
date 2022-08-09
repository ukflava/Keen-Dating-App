import React from "react";

const Preferences = () => {

  return (
    <section className="user-card-container border-8 w-full h-screen place-content-center p-5 border-red-500 ">
      <article className="rounded-md flex flex-col w-full h-full shadow-lg" >
        <div className='flex justify-center items-center pt-10 border-b-2 pb-6 bg-fuchsia-700'>

          <h2 className='text-center pl-1 pr-18 text-2xl bg-fuchsia-700 font-medium text-white'>
            Discovery Preferences
          </h2>
        </div>

        <div className="border-double border-4 my-2 grid grid-cols-4">
          <p className="pl-5 pt-5 text-xl col-span-3 mt-2">I'm into</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-fuchsia-800 mt-8 ml-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>

          <p className="pl-5 pb-5 text-gray-500 text-sm">
            Women
          </p>
        </div>
        


      </article>
    </section>
  )
}

export default Preferences;