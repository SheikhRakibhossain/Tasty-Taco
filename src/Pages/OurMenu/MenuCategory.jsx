import { Link } from "react-router-dom";
import MenuItems from "./MenuItems";

const MenuCategory = ({ items, title }) => {
    // const {title} = items;
  return (
    <>
      <div className="grid md:grid-cols-2 gap-4 px-6 py-16 ">
        {items.map((item) => (
          <MenuItems key={item._id} item={item}></MenuItems>
        ))}
      </div>
      <div className="text-center pb-6">
        <Link to={`/food/${title}`}>
          {" "}
          <button className="btn btn-outline">ORDER YOUR FAVOURITE FOOD</button>
        </Link>
      </div>
    </>
  );
};

export default MenuCategory;
