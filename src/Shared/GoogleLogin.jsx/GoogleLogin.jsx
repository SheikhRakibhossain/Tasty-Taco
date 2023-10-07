import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { GoogleLogin } = useContext(AuthContext);
  
const location = useLocation();
const navigate = useNavigate();
const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    GoogleLogin()
    .then(res =>{
        const LoggedUser = res.user;
        console.log("user sign from google" ,LoggedUser);
        
            // console.log(res.user);
            // data saving function for save in the backend database center
            const user = { name:LoggedUser.displayName, email:LoggedUser.email, phone:LoggedUser.phone };
            console.log("User data before sending to API:", user);
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then(() => {
                    navigate(from, { replace: true });
              })
              .catch((error) => console.log("api error here", error));
          

    })
    .catch(error=>console.log("Error from google sign funtion",error))
  };
  return (
    <div>
      <button onClick={handleGoogleLogin} className="px-4 py-2 flex justify-center items-center gap-2  rounded-lg text-slate-700  hover:text-slate-900 hover:cursor-pointer transition duration-150">
        <img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;
