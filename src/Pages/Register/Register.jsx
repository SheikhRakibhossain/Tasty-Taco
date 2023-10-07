import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import GoogleLogin from "../../Shared/GoogleLogin.jsx/GoogleLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.current_password.value;
    // const user = {name, phone, photoURL, email, password};
    // console.log(user);
    createUser(email, password)
      .then((res) => {
        const newUser = res.user;
        console.log("New user here", newUser);

        updateProfile(newUser, {
          displayName: name,
          photoURL: photoURL,
          phoneNumber: phone,
        })
          .then(() => {
            // console.log(res.user);
            // data saving function for save in the backend database center
            const user = { name:newUser.displayName, email:newUser.email, phone:newUser.phone };
            console.log("User data before sending to API:", user);
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "The user has been saved",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  form.reset();
                  navigate('/')
                }
              })
              .catch((error) => console.log("api error here", error));
          })
          .catch((error) => {
            console.log("user backend saving database error", error);
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <img
              src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4582.jpg?size=626&ext=jpg&ga=GA1.1.28436747.1695030037&semt=sph"
              alt=""
            />
          </div>
          <div className="w-1/2 card flex-shrink-0  max-w-sm shadow-2xl bg-base-100 py-8">
            <form onSubmit={handleRegister} className="card-body">
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
                  type="number"
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
                  name="current_password"
                  placeholder="password"
                  className="input input-bordered"
                  autoComplete="current-password"
                  required
                />
                <label className="label">
                  <Link to="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                  <Link to="/login" className="label-text-alt link link-hover">
                    already have an account?{" "}
                    <span className="text-red-400 font-semibold">
                      please, Login
                    </span>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Register Now"
                  className="btn btn-primary"
                />
              </div>
            </form>
           {/* google login component */}
           <div className="flex justify-center">
           <GoogleLogin/>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
