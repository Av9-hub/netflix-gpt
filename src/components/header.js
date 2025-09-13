import {useNavigate} from "react-router-dom" 
import {signOut} from "firebase/auth"
import {auth} from "../utils/firebase"
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react"
import { onAuthStateChanged } from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/contant";


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


  return (
    <div className='flex absolute justify-between w-screen z-20'>
        <div>
          <img className='w-48  ml-40  pt-3 ' src={LOGO_URL}/>
        </div>
        

        {user&&
        (<div className="flex mx-12">
          <img className="w-10 h-10 my-8 mx-1" alt="userProfile" src={user.photoURL}/>
          <button onClick={handleSignOut} className='bg-red-600 px-2 py-1 rounded-sm   my-8 font-medium text-white'>SignOut</button>
        </div>)}
    </div>
  )
}

export default Header;