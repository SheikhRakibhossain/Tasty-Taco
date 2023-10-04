import useMenu from "../../../Hooks/useMenu";
import MenuCategory from "../../OurMenu/MenuCategory";

const FromOurMenu = () => {
  const [menu] = useMenu();
  console.log(menu);
  const popular = menu.filter((item) => item.category === "popular");
  console.log(popular);

  return (
    <>
      <div className="pt-20 pb-10  flex justify-center items-center text-center">
        <div>
          <p>
            ----------
            <span className="text-slate-800 text-4xl font-bold uppercase ">
              Check it out
            </span>
            ----------
          </p>
          <div className="divider "></div>
          <h2 className="text-xl font-semibold italic"> From Our Menu</h2>
          <div className="divider "></div>
        </div>
      </div>
      <MenuCategory items={popular} />
    </>
  );
};

export default FromOurMenu;
