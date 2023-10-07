import { FaCalendar, FaCalendarCheck, FaHome, FaHouseUser, FaLayerGroup, FaPaperPlane, FaShoppingCart, FaSitemap, FaStarAndCrescent, FaToggleOff, FaWallet } from "react-icons/fa";
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
              <NavLink to="user-home"> <FaHome/>User Home </NavLink>
            </li>
            <li>
              <NavLink to="my-cart"> <FaShoppingCart/>My Cart </NavLink>
            </li>
            <li>
              <NavLink to="reservation"> <FaCalendar/> Reservation </NavLink>
            </li>
            <li>
              <NavLink to="payment-history"> <FaWallet/> Payment History </NavLink>
            </li>
            <li>
              <NavLink to="add-review"> <FaStarAndCrescent/> Add Review</NavLink>
            </li>
            <li>
              <NavLink to="my-booking"> <FaCalendarCheck/> My Booking </NavLink>
            </li>

          <div className="divider"></div> 
            {/* Sidebar content here */}
            <li>
              <NavLink to="home"> <FaHouseUser/>Home </NavLink>
            </li>
            <li>
              <NavLink to="menu"> <FaLayerGroup/>My Cart </NavLink>
            </li>
            <li>
              <NavLink to="food"> <FaSitemap/>Food </NavLink>
            </li>
            <li>
              <NavLink to="contact"> <FaPaperPlane/>Contact</NavLink>
            </li>
            

          </ul>
          {/* 2nd section part menu for all users */}
          
        </div>
      </div>
    </>
  );
};

export default Dashboard;
