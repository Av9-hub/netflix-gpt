import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from "./SecondaryContainer"
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import GptPage from './GptPage';
import useTopRatedMovies from '../hooks/useTopRatedMovies';


const Browse = () => {
  
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  const showGptPage=useSelector(store=>store.gpt.showGptBtn);
  
  return (
    <div>
      <Header/>
      {showGptPage?<GptPage/>:
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
      }
      
    </div>
  )
}

export default Browse;