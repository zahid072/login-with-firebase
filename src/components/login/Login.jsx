import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();
  // signIn with google
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log("error:", error.message);
      });
  };
  // signIn with git hub
  const signInWithGitHub = () => {
    signInWithPopup(auth, gitHubProvider)
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
      {!user && (
        <>
          <button
            onClick={signInWithGoogle}
            className="px-4 py-2 bg-orange-400 rounded-lg"
          >
            Login
          </button>
          <button
            onClick={signInWithGitHub}
            className="px-4 py-2 bg-blue-400 rounded-lg"
          >
            SignIn with GitHub
          </button>
        </>
      )}

      {user && (
        <button
          onClick={handleLogOut}
          className="px-4 py-2 bg-orange-400 rounded-lg"
        >
          Log out
        </button>
      )}

      {user && (
        <>
          <h1>User: {user.displayName}</h1>
          <img src={user.photoURL} alt="" />
        </>
      )}
    </div>
  );
};

export default Login;
