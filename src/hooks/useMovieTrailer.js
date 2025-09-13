import { useDispatch } from "react-redux";
import {addMovieTrailer} from "../utils/movieSlice"
import {API_OPTION} from "../utils/contant"
import { useEffect } from "react";

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
   
const backgroundMovie=async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/" + movieId+"/videos?language=en-US", API_OPTION);
    const json=await data.json();
    console.log(json);
    const filterData=json.results.filter(category=>category.type==="Trailer");
    console.log(filterData);
    const trailer=filterData.length?filterData[7]:json.results[0];
    dispatch(addMovieTrailer(trailer));
}  
useEffect(()=>{
    backgroundMovie();
},[]);
}
export default useMovieTrailer;
