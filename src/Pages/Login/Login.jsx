import { useContext } from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import GoogleLogin from "../../Shared/GoogleLogin.jsx/GoogleLogin";



const Login = () => {

const {signIn} = useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate();
const from = location.state?.from?.pathname || "/";


const handleLogin=(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
    .then( res =>{
        const loggedUser = res.user;
        console.log(loggedUser);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'User signin successfully',
            showConfirmButton: false,
            timer: 1500
          })
          form.reset();
          navigate(from, { replace: true });

    })
    .catch(error =>console.log(error))

}
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=sph" />
          </div>
          <div className=" flex-shrink-1  max-w-sm shadow-2xl bg-base-100 py-6">
            <form onSubmit={handleLogin} className="card-body m-0">
            <h1 className="text-5xl font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                  <Link to="/register" className="label-text-alt link link-hover">
                    new to here? <span className="text-red-400 font-semibold">please Register</span>
                  </Link>
                  
                </label>
              </div>
              <div className="form-control mt-6">
              <input type="submit" value="Login Now" className="btn btn-primary"/>
              </div>
            </form>
            {/* google login component */}
            <div  className="flex justify-center">
            <GoogleLogin/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
