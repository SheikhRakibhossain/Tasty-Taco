import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <img src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4582.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=sph" alt="" />
          </div>
          <div className="w-1/2 card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 py-8">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photoURL"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <Link to="/login" className="label-text-alt link link-hover">
                    already have an account? Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" value="Register Now" className="btn btn-primary"/>
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

export default Register;
