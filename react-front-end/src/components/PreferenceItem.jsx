import PreferenceOption from "./PreferenceOption"

const PreferenceItem = (props) => {
  return (
    <section className="user-card-container  border-8 w-full h-screen place-content-center p-5">
    <article className="rounded-md flex flex-col w-full shadow-lg" >
      <div className='flex justify-center items-center pt-10 border-b-2 pb-6 bg-fuchsia-800'>
        <h2 className='text-center pl-1 pr-18 text-2xl bg-fuchsia-800 font-medium text-white'>
          Discovery Preferences
        </h2>
      </div>
      <div className="flex col-span-2">

          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-11 hover:text-fuchsia-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        <p className="pt-10 pb-10 pl-2 text-xl font-medium">
         hii💜
        </p>
      </div>
        {/* <PreferenceOption /> */}



    </article>
  </section>
  )
}

export default PreferenceItem;