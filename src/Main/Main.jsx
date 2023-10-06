import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  const location = useLocation();
  const isLogin = location.pathname?.includes("login");
  const isRegister = location.pathname.includes("register");


  return (
    <>
      <section className="flex flex-col min-h-screen  px-8 border border-black">
       {(isLogin || isRegister) || <Navbar className="border border-green-800 sticky top-0" />}
        <div className="flex-grow border border-purple-500">
          <Outlet className="border border-warning" />
        </div>
       {(isLogin || isRegister) || <Footer />}
      </section>
    </>
  );
};

export default Main;
