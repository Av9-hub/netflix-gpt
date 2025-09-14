import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from "./SecondaryContainer"
import useUpcomingMovies from '../hooks/useUpcomingMovies';


const Browse = () => {
  
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse;