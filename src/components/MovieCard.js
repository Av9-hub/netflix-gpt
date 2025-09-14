import { MOVIE_IMG_URL } from "../utils/contant"

const MovieCard = ({path,title}) => {
  return (
    <div className=" flex-shrink-0 mx-3 ml-4 z-20 my-4 w-52">
      <img className=" w-52 h-32 cursor-pointer" alt="movie img" src={MOVIE_IMG_URL+path}/>
      <p className=" text-white  truncate whitespace-nowrap overflow-hidden w-full">{title}</p>
    </div>
  )
}

export default MovieCard