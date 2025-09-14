import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className=' w-screen mb-9 '>
      
        <h1 className='text-white font-bold text-2xl relative z-30 mx-4 '>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar w-screen'>
            {movies?.map((movie)=>(
                <MovieCard key={movie.id} path={movie.backdrop_path} title={movie.title}/>
            ))}
        </div>
      
        
    </div>
  )
}

export default MovieList