import React, { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  console.log(app);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log("error:", error.message);
      });
  };
  const handleLogOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  };
  return (
    <div>
      {!user && <button
        onClick={signInWithGoogle}
        className="px-4 py-2 bg-orange-400 rounded-lg"
      >
        Login
      </button>}
      {user && <button
        onClick={handleLogOut}
        className="px-4 py-2 bg-orange-400 rounded-lg"
      >
        Log out
      </button>}

      {user && <h1>User: {user.displayName}</h1>}
    </div>
  );
};

export default Login;
