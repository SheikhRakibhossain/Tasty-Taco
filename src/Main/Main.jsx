import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <>
      <section className="flex flex-col min-h-screen  px-8 border border-black">
        <Navbar className="border border-green-800" />
        <div className="flex-grow border border-purple-500">
          <Outlet className="border border-warning" />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Main;
