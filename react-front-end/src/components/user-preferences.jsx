import React, { useState } from 'react';

function Preferences() {


  return (
    <article className="flex flex-col w-full h-full border border-red-500 rounded" >
      <div className='flex justify-center items-center mt-10 mb-10 px-5 border-b-2 pb-6'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-fuchsia-800 font-extrabold" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>

        <div className='text-right px-20 font-semibold text-lg'>
          I am into 💜
        </div>
      </div>

      <div className='pl-6 pb-5 mb-6 grid grid-cols-3 grid-rows-1 border-b-2 border-fuchsia-800 place-content-between'>
        <p className='col-span-2'>Men</p>
        <input id="angular-checkbox" type="checkbox" value="" className="col-span-1 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 right-0"/>
      </div>

    </article>
  )
}

export default Preferences;