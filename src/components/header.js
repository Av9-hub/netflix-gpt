import {useNavigate} from "react-router-dom" 
import {signOut} from "firebase/auth"
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react"
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";


const Header = () => {
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user);
  const dispatch=useDispatch();

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/");

  }).catch((error) => {
  navigate("/error")
  });
  }


  return (
    <div className='flex justify-between'>
        <div>
          <img className='w-48 absolute ml-40 z-20 pt-3 ' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
        </div>
        

        {user&&
        (<div className="flex">
          <img className="w-10 rounded-full h-10 my-8" alt="userProfile" src={user?.photoURL}/>
          <button onClick={handleSignOut} className='bg-red-600 px-2 py-1 rounded-md mr-28  my-8 font-medium text-white'>SignOut</button>
        </div>)}
    </div>
  )
}

export default Header;