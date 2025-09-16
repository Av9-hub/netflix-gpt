import React from 'react'
import { useSelector } from 'react-redux'
import lang from "../utils/languageConstants"

const GptSearchBar = () => {
    const selectLang=useSelector(store=>store.config.lang);

  return (
    <div className='flex justify-center'>
            <form className='w-[30%] mt-[20%] flex' onSubmit={(e)=>e.preventDefault()}>
            <input className='w-full border border-black  mt-[25%] mr-6 py-2 pl-3 rounded-3xl bg-gray-500 placeholder-white placeholder:px-2 font-medium' type="text" placeholder={lang[selectLang].gptSearchPlaceholder}/>

            <button className='border border-black mt-[25%] text-white font-medium bg-gray-500 w-24 p-1 px-2'>{lang[selectLang].search}</button>
            </form>
  
        
    </div>
  )
}

export default GptSearchBar