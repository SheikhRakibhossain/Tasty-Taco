import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <>
      <section className="flex flex-col min-h-screen  px-8">
        <Navbar />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Main;
