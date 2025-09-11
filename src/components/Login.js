
import Header from "./Header.js"
import { useState ,useRef} from "react";
import { checkValidData } from "../utils/validity.js";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import {useNavigate} from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from "../utils/userSlice.js";


const Login = () => {


    const [signBtn,setSignBtn]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);
    const navigate=useNavigate();
    const dispatch=useDispatch();


    const email=useRef();
    const password=useRef();
    const name=useRef();
  

    const toggleSignBtn=()=>{
      setSignBtn(!signBtn);
    }


    const handleClick=()=>{
      //validation
       const message=checkValidData(email.current.value,password.current.value);
       setErrorMessage(message);
       if(message) return;

       //sign up and sign

       if(!signBtn){
        //sign up
          createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          updateProfile(user, {
              displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocIYnlT4GE_RN0f-sIfVp9747EPEpEWDp5gcD_ZNaCtlskx1-okj=s360-c-no"
          }).then(() => {
              const {uid,email,displayName,photoURL} = auth.currentUser;
              dispatch(addUser({uid:uid, email:email ,displayName:displayName, photoURL:photoURL})) 
              navigate("/Browse");
            
          }).catch((error) => {
            setErrorMessage(error);

          });
         // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"/n"+errorMessage);
          // ..
        });
       }


       else{
        //sign in
        signInWithEmailAndPassword(auth,  email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
         navigate("/Browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
           setErrorMessage(errorCode+"/n"+errorMessage);

        });
       }
    }



  return (

    <div className="bg-black relative w-full h-screen " > 

    <Header/>

    <img className="absolute top-0 left-0 w-full h-full object-cover " src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg"/>
    <div className=" h-full w-full absolute   bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div> 

             <form onSubmit={(e)=>e.preventDefault()} className="top-1/2 left-1/2 bg-black absolute z-10 -translate-x-1/2 -translate-y-1/2 w-[28%] bg-opacity-60 p-14 flex flex-col mt-3/12 ">
        
            <h2 className="font-bold text-white text-4xl opacity-100 mb-8">{signBtn?"Sign In":"Sign Up"}</h2>

            {!signBtn&&(<div>
            <input ref={name} className="mb-8 p-4 w-full font-semibold bg-blue-200 bg-opacity-40 placeholder-white border border-white rounded-md" type="text" placeholder="First Name"></input>
            <input className="mb-8 p-4 w-full font-semibold bg-blue-200 bg-opacity-40 placeholder-white border border-white rounded-md" type="text" placeholder="Last Name"></input>
            </div>)}

            <input ref={email} className="mb-8 p-4 font-semibold bg-blue-200 bg-opacity-40 placeholder-white border border-white rounded-md" type="email" placeholder="Email Address"></input>
            <input ref={password} className=" p-4 font-semibold bg-blue-200 bg-opacity-40 placeholder-white border border-white rounded-md" type="password" placeholder="Password"></input>


            <p className="text-red-500 text-base mb-8">{errorMessage}</p>


            <button className="text-white bg-red-600 mb-16 p-3 rounded-md" onClick={handleClick}>{signBtn?"Sign In": "Sign Up"}</button>
            {signBtn?
            <div className="text-lg ">
                <span className="text-gray-400 ">New to Netflix?</span>
                <span className="text-white cursor-pointer" onClick={toggleSignBtn}>Sign up now.</span>
            </div>:
            <div className="text-lg ">
                <span className="text-gray-400 ">Already Registered?</span>
                <span className="text-white cursor-pointer" onClick={toggleSignBtn}>Sign in.</span>
            </div>}
            

            </form>
    </div>
  )
}

export default Login;