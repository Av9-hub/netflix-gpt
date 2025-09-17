export const LOGO_URL="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USER_URL="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"

export const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: "Bearer "+ process.env.REACT_APP_TMDB_KEY
  }
};

export const MOVIE_IMG_URL="https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES=[
  {identifier:"English",name:"English"},
  {identifier:"Hindi",name:"Hindi"},
  {identifier:"French",name:"French"},
];



export const GEMINI_KEY=process.env.REACT_APP_GEMINI_KEY

