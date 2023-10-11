import {
  FaBook,
  FaCalendar,
  FaCalendarCheck,
  FaHome,
  FaHouseUser,
  FaLandmark,
  FaLayerGroup,
  FaPaperPlane,
  FaShoppingCart,
  FaSitemap,
  FaStarAndCrescent,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-normal">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-outline drawer-button lg:hidden"
          >
            Show all Menu
          </label>

          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                {" "}
                <li>
                  <NavLink to="admin">
                    {" "}
                    <FaHome />
                    Admin Home{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="add-item">
                    {" "}
                    <FaUtensils />
                    Add Item{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="manage-item">
                    {" "}
                    <FaLandmark /> Manage Item{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="manage-booking">
                    {" "}
                    <FaBook /> Manage Booking{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="all-users">
                    {" "}
                    <FaUsers />
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <NavLink to="user-home">
                    {" "}
                    <FaHome />
                    User Home{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="my-cart">
                    {" "}
                    <FaShoppingCart />
                    My Cart{" "}
                    <span className="badge badge-secondary badge-outline">
                      +{cart.length}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="reservation">
                    {" "}
                    <FaCalendar /> Reservation{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="payment-history">
                    {" "}
                    <FaWallet /> Payment History{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="add-review">
                    {" "}
                    <FaStarAndCrescent /> Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="my-booking">
                    {" "}
                    <FaCalendarCheck /> My Booking{" "}
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            {/* second menu content here */}
            <li>
              <NavLink to="/">
                {" "}
                <FaHouseUser />
                Home{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="menu">
                {" "}
                <FaLayerGroup />
                Menu{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="food">
                {" "}
                <FaSitemap />
                Food{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="contact">
                {" "}
                <FaPaperPlane />
                Contact
              </NavLink>
            </li>
          </ul>
          {/* 2nd section part menu for all users */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
