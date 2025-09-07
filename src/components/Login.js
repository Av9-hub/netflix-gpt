
import Header from "./Header.js"
import { useState } from "react";
const Login = () => {

    const [signBtn,setSignBtn]=useState(true);
    const toggleSign=()=>{
      setSignBtn(!signBtn);
    }

  return (

    <div className="bg-black relative w-full h-screen " > 

    <Header/>

    <img className="absolute top-0 left-0 w-full h-full object-cover " src="https://assets.nflxext.com/ffe/siteui/vlv3/8d617e19-3c3c-4c28-8998-c9b14dbc7200/web/IN-en-20250901-TRIFECTA-perspective_48d84d4e-9558-46b8-a0f3-8b2dc8478431_large.jpg"/>
    <div className=" h-full w-full absolute   bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div> 

             <form className="top-1/2 left-1/2 bg-black absolute z-10 -translate-x-1/2 -translate-y-1/2 w-[28%] bg-opacity-80 p-14 flex flex-col mt-3/12 ">
        
            <h2 className="font-bold text-white text-4xl opacity-100 mb-8">{signBtn?"Sign In":"Sign Up"}</h2>

            {!signBtn&&(<div>
            <input className="mb-8 p-4 w-full font-semibold bg-blue-200 bg-opacity-40 placeholder-white border border-white rounded-md" type="text" placeholder="First Name"></input>
            <input className="mb-8 p-4 w-full font-semibold bg-blue-200 bg-opacity-40 placeholder-white border border-white rounded-md" type="text" placeholder="Last Name"></input>
            </div>)}

            <input className="mb-8 p-4 font-semibold bg-blue-200 bg-opacity-40 placeholder-white border border-white rounded-md" type="email" placeholder="Email Address"></input>
            <input className="mb-8 p-4 font-semibold bg-blue-200 bg-opacity-40 placeholder-white border border-white rounded-md" type="password" placeholder="Password"></input>
            <button className="text-white bg-red-600 mb-16 p-3 rounded-md">Sign In</button>
            {signBtn?
            <div className="text-lg ">
                <span className="text-gray-400 ">New to Netflix?</span>
                <span className="text-white cursor-pointer" onClick={toggleSign}>Sign up now.</span>
            </div>:
            <div className="text-lg ">
                <span className="text-gray-400 ">Already Registered?</span>
                <span className="text-white cursor-pointer" onClick={toggleSign}>Sign in.</span>
            </div>}
            

            </form>
    </div>
  )
}

export default Login;