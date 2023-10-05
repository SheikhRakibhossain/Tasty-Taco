import { createContext, useEffect, useState } from "react";
import app from "./../assets/Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ chidren }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


//new user creation function
  const createUser = ( email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
//user login function





  useEffect( ()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        console.log('current user logged', currentUser)
        setLoading(false)
    })
    return ()=>{
        return unsubscribe();
    }
  },[])

  const authInfo = {
    user,
    loading,
    createUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{chidren}</AuthContext.Provider>
  );
};

export default AuthProvider;
