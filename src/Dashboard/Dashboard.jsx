import { FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet} from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          <Outlet/>
          


          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Show all
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink to="user-home"> <FaShoppingCart/>User Home </NavLink>
            </li>
            <li>
              <NavLink to="my-cart"> <FaShoppingCart/>My Cart </NavLink>
            </li>
            <li>
              <NavLink to="reservation"> <FaShoppingCart/> Reservation </NavLink>
            </li>
            <li>
              <NavLink to="payment-history"> <FaShoppingCart/> Payment History </NavLink>
            </li>
            <li>
              <NavLink to="add-review"> <FaShoppingCart/> Add Review</NavLink>
            </li>
            <li>
              <NavLink to="my-booking"> <FaShoppingCart/> My Booking </NavLink>
            </li>

          </ul>
          <div className="divider"></div> 
          {/* 2nd section part menu for all users */}
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink to="home"> <FaShoppingCart/>Home </NavLink>
            </li>
            <li>
              <NavLink to="menu"> <FaShoppingCart/>My Cart </NavLink>
            </li>
            <li>
              <NavLink to="food"> <FaShoppingCart/>Food </NavLink>
            </li>
            <li>
              <NavLink to="contact"> <FaShoppingCart/>Contact</NavLink>
            </li>
            

          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
