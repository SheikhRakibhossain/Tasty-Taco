import { useContext } from "react";
import { AuthContext } from './../AuthProvider/AuthProvider';
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext);
    if(loading){
        return <button type="button" className="bg-indigo-500 ..." disabled>
        <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
        </svg>
        Loading...
      </button>
    }
    if(user){
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;