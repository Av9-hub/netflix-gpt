import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from "../utils/languageConstants"
import { useRef } from 'react'
import { geminiai } from '../utils/gemini'
import { API_OPTION } from '../utils/contant'
import { addMovieResult } from '../utils/gptSlice'


const GptSearchBar = () => {
    const selectLang=useSelector(store=>store.config.lang);
    const searchText=useRef(null);
    const dispatch=useDispatch();

    const searchTmdbMovies=async(movie)=>{

    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie +'&include_adult=false&language=en-US&page=1', API_OPTION);
    const json=await data.json();
    console.log("json",json);
    return json.results;
    }

    const handleGptSearchClick=async()=>{
      console.log(searchText.current.value);
      //make a API cal lto GPT API and get movie results

    const query= "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const response = await geminiai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: query,
  });
      console.log(response.text);
      const geminiMovies=response.text.split(",");
      const promiseArray=geminiMovies.map(movie=>searchTmdbMovies(movie));
      console.log("promise",promiseArray);
      const tmdbResults=await Promise.all(promiseArray);
      console.log("tmdbResults",tmdbResults);
      dispatch(addMovieResult(
      {movieNames:geminiMovies,
        movieResults:tmdbResults}));
    }

  return (
    <div className='flex justify-center'>
            <form className='w-[30%] mt-[2%] flex' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText}
            className='w-full border border-black  mt-[25%] mr-6 py-2 pl-3 rounded-3xl bg-gray-500 placeholder-white placeholder:px-2 font-medium' type="text" placeholder={lang[selectLang].gptSearchPlaceholder}/>

            <button onClick={handleGptSearchClick}
              className='border border-black mt-[25%] text-white font-medium bg-gray-500 w-24 p-1 px-2'>
              {lang[selectLang].search}
            </button>
            
            </form>
  
        
    </div>
  )
}

export default GptSearchBar