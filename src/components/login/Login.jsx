import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  console.log(app)
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result)=>{
      const user = result.user;
      console.log(user)
    })
    .catch((error)=>{
      console.log("error:", error.message)
    })
  };
  return (
    <div>
      <button
        onClick={signInWithGoogle}
        className="px-4 py-2 bg-orange-400 rounded-lg"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
