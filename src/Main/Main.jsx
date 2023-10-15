import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  const location = useLocation();
  const isLogin = location.pathname?.includes("login");
  const isRegister = location.pathname.includes("register");


  return (
    <>
      <section className="min-h-screen  px-8 ">
       {(isLogin || isRegister) || <Navbar className=" sticky top-0" />}
        <div className="flex-grow">
          <Outlet className="border border-warning" />
        </div>
       {(isLogin || isRegister) || <Footer />}
      </section>
    </>
  );
};

export default Main;
