import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaShoppingBag } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  const handleLogout = () => {
    logOut(user)
      .then(() => {
        toast("Log out successfully", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const options = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Menu</NavLink>
      </li>
      <li>
        <NavLink to="/food/salad">Food</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <Link
              onClick={handleLogout}
              className=" text-indigo-700"
            >
              Log Out
            </Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/pay">Pay</NavLink>
      </li>
      
        {isAdmin ? <li><NavLink to="/dashboard/admin-home">Dashboard</NavLink></li>: <li><NavLink to="/dashboard/user-home">Dashboard</NavLink></li>}
     
      {/* cart */}
      <Link to="/dashboard/my-cart" className="btn btn-sm bg-white">
        
      <FaShoppingBag/>
        <div className="badge badge-secondary">+{cart?.length || 0}</div>
      </Link>
    </>
  );
  return (
    <>
      <div className="navbar sm:justify-between bg-base-100 sticky top-0 z-50">
        <div className="navbar-start">
          <h2 className="text-3xl font-semibold animate-pulse sm:text-end">
            Testy Taco
          </h2>
        </div>
        <div className=" navbar-end  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{options}</ul>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {options}
          </ul>
        </div>
      </div>
      {/* toast container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Navbar;
