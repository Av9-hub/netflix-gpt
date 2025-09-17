import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
    const  {movieNames,movieResults}=useSelector(store=>store.gpt);
    if(!movieNames) return null;
    console.log("movieResults ",movieResults);
    console.log("movieNames",movieNames);
  return (
    <div className='w-1/2 h-auto'>
        {movieNames.map((movie,index)=>(
            <MovieList 
            key={movie}
            title={movie}
            movies={movieResults[index]}/>
        ))}
    </div>
  )
}

export default GptMovieSuggestion;