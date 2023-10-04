import MenuCover from "../../Shared/MenuCover";
import SectionTitle from "../../Shared/SectionTitle";
import HSlider from "./Slider/HSlider";
import cover from "../../assets/home/chef-service.jpg";
import OrderSlider from "./OrderSlider/OrderSlider";
import FromOurMenu from "./FromOurMenu/FromOurMenu";

const Home = () => {
  return (
    <>
      <HSlider />
      <SectionTitle
        title={"ORDER ONLINE"}
        subtitle={"From 11:00am to 10:00pm"}
      />
      <OrderSlider />
      <FromOurMenu />
      <MenuCover
        menuTitle={"popular menu"}
        menuDescription={"lorem10 hello there has been sataisfiiedddfdsf"}
        menuImage={cover}
        className="mt-50"
      />
      
    </>
  );
};

export default Home;
