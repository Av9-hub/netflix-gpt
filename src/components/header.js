import {useNavigate} from "react-router-dom" 
import {signOut} from "firebase/auth"
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react"
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/contant";
import { toggleGptBtn } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";
import { SUPPORTED_LANGUAGES } from "../utils/contant";


const Header = () => {
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const dispatch=useDispatch();

   const gptBtn=useSelector(store=>store.gpt.showGptBtn);

  const handleToggleGptBtn=()=>{
    dispatch(toggleGptBtn());
  }

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/");
     
  }).catch((error) => {
  navigate("/error")
  });
  }


  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {

    if (user) {
      const {uid,email,displayName,photoURL} = user;
      dispatch(addUser({uid:uid, email:email ,displayName:displayName, photoURL:photoURL}))
      navigate("/browse")
    }
      
    else {
      dispatch(removeUser()); 
      navigate("/");
    }
    });
    return ()=>unsubscribe();
},[]);

const handleLangChange=(e)=>{
  dispatch(changeLang(e.target.value));
}


  return (
    <div className='flex absolute justify-between w-screen z-20'>
        <div>
          <img className='w-48  ml-40  pt-3 ' src={LOGO_URL}/>
        </div>
        {gptBtn&&
        <select onChange={handleLangChange}
        className="px-2  my-8 font-medium text-white bg-slate-500 -mr-[50%]">
          {SUPPORTED_LANGUAGES.map((lang)=>(
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>
        }

        {user&&
        (<div className="flex mx-12">
          <button onClick={handleToggleGptBtn} className="bg-red-600 px-2 rounded-sm  my-8 font-medium text-white">{gptBtn?"Home":"GPTSearch"}</button>
          <img className="w-10 h-10 my-8 mx-1" alt="userProfile" src={user.photoURL}/>
          <button onClick={handleSignOut} className='bg-red-600 px-2  rounded-sm   my-8 font-medium text-white'>SignOut</button>
        </div>)}
    </div>
  )
}

export default Header;