import { createContext, useEffect, useState } from "react";
import app from "./../assets/Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ chidren }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);



  const createUser = (auth, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect( ()=>{
    
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
