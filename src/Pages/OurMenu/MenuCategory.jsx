import MenuItems from "./MenuItems";

const MenuCategory = ({items}) => {
    return (
        <>
        <div className="grid md:grid-cols-2 gap-4">
        {
            items.map(item =><MenuItems key={item._id} item={item}></MenuItems>)
        }
        </div>
            
        </>
    );
};

export default MenuCategory;