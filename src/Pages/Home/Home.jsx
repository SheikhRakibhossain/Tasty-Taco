import MenuCover from "../../Shared/MenuCover";
import SectionTitle from "../../Shared/SectionTitle";
import Menu from "../OurMenu/Menu";
import HSlider from "./Slider/HSlider";
import cover from "../../assets/home/chef-service.jpg";

const Home = () => {
  return (
    <>
      <HSlider />
      <SectionTitle title={"hello"} subtitle={"justcheck it out"} />
      <Menu />
      <MenuCover
        menuTitle={"popular menu"}
        menuDescription={"lorem10 hello there has been sataisfiiedddfdsf"}
        menuImage={cover}
      />
    </>
  );
};

export default Home;
