import { useContext } from "react";
import {Link} from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'



const Login = () => {

const {signIn} = useContext(AuthContext)

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

    })
    .catch(error =>console.log(error))

}
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=sph" />
          </div>
          <div className=" w-1/2 card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 py-6">
            <form onSubmit={handleLogin} className="card-body">
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
                    new to here? please Register
                  </Link>
                  
                </label>
              </div>
              <div className="form-control mt-6">
              <input type="submit" value="Login Now" className="btn btn-primary"/>
              </div>
            </form>
            <button
    className="px-4 py-2 flex justify-center items-center gap-2  rounded-lg text-slate-700  hover:text-slate-900 hover:cursor-pointer transition duration-150">
    <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
    <span>Continue with Google</span>
</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
