import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  console.log(movies);
    const validMovies = movies?.filter(movie => movie.backdrop_path)

  if (!validMovies || validMovies.length === 0) return null;
  return (
    <div className=' w-screen mb-9  '>
        
        <h1 className='text-white font-bold text-2xl relative z-30 mx-4 '>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar w-screen'>
            {validMovies?.map((movie)=>(
                <MovieCard key={movie.id} path={movie.backdrop_path} title={movie.title}/>
            ))}
        </div>
      
        
    </div>
  )
}

export default MovieList