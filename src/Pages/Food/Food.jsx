import useMenu from "../../Hooks/useMenu";
import MenuCover from "../../Shared/MenuCover";
import SectionBanner from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FoodCard from "./FoodCard";

const Food = () => {
  const [menu] = useMenu();
  console.log(menu);
  // const popular = menu.filter((item) => item.category === "popular");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
//   const offered = menu.filter((item) => item.category === "offered");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <>
      <MenuCover
        menuTitle={"OUR food your shop"}
        menuDescription={"Would you like to try a dish?"}
        menuImage={SectionBanner}
      />
      {/* order food card started */}
      <Tabs className="my-20  ">
        <TabList className="text-center border-t-4   border-indigo-500">
          <Tab>
            <button className="btn btn-primary btn-sm"> Salad </button>
          </Tab>
          <Tab>
            <button className="btn btn-accent btn-sm"> Pizza </button>
          </Tab>
          <Tab>
            <button className="btn btn-warning btn-sm"> Dessert </button>
          </Tab>
          <Tab>
            <button className="btn btn-secondary btn-sm"> Soup </button>
          </Tab>
          <Tab>
            <button className="btn btn-success btn-sm"> Drinks </button>
          </Tab>
        </TabList>

        <TabPanel>
          <FoodCard items={salad} />
        </TabPanel>
        <TabPanel>
          <FoodCard items={pizza} />
        </TabPanel>
        <TabPanel>
          <FoodCard items={dessert} />
        </TabPanel>
        <TabPanel>
          <FoodCard items={soup} />
        </TabPanel>
        <TabPanel>
          <FoodCard items={drinks} />
        </TabPanel>
      </Tabs>
    </>
  );
};

export default Food;
