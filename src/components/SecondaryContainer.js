import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
const movies =useSelector(store=>store.movies);



  return (
    <div className="-mt-36 bg-black  overflow-hidden">
      <MovieList title={"Trending Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
    </div>
  )
}

export default SecondaryContainer;