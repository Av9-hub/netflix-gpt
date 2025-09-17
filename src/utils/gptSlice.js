import { createSlice } from "@reduxjs/toolkit";
const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptBtn:false,
        movieNames:null,
        movieResults:null,
    },
    reducers:{
        toggleGptBtn:(state,action)=>{
            state.showGptBtn=!state.showGptBtn;
        },
        addMovieResult:(state,action)=>{
            const {movieNames,movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;
        }
    },

});
export const {toggleGptBtn,addMovieResult} =gptSlice.actions;
export default gptSlice.reducer;