import useMenu from "../../Hooks/useMenu";
import MenuCover from "../../Shared/MenuCover";
import MenuCategory from "./MenuCategory";
import menuImg from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../Shared/SectionTitle";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";

const Menu = () => {
  const [menu] = useMenu();
  console.log(menu);
  const popular = menu.filter((item) => item.category === "popular");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <>
      {/* menu hero part */}
      <MenuCover
        menuTitle={"our Menu"}
        menuDescription={"Would you like to try a dish?"}
        menuImage={menuImg}
      />
      <SectionTitle title={"Don't Miss"} subtitle={"Today's Offer"} />
      <MenuCategory items={popular} />

      {/* dessert item started  */}
      <MenuCover
        menuTitle={"Dessert"}
        menuDescription={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        menuImage={dessertImg}
      />
      <MenuCategory items={dessert} />
      {/* dessert item ended  */}
    </>
  );
};

export default Menu;
