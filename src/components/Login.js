import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header />
        <div className="absolute">
            <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"
                alt="Background Image"
            />
        </div>

        <form className="w-[30%] p-10 bg-black absolute my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up" }</h1>
          
          {!isSignInForm && <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-500"
          />}

          <input
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full bg-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 my-3 w-full bg-gray-500"
          />
          <button className="p-2 my-4 bg-red-700 w-full">{isSignInForm ? "Sign In" : "Sign Up" }</button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            { isSignInForm ? "New to Netflix? Sign Up Now" :
              "Already registered? Sign In Now" }</p>
        </form>
    </div>
  )
}

export default Login