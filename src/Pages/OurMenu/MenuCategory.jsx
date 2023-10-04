import MenuItems from "./MenuItems";

const MenuCategory = ({items}) => {
    return (
        <>

        <div className="grid md:grid-cols-2 gap-4 px-6 py-16 ">
        {
            items.map(item =><MenuItems key={item._id} item={item}></MenuItems>)
        }
        
        </div>
        <div className="text-center pb-6">
            <button className="btn btn-outline">ORDER YOUR FAVOURITE FOOD</button>
        </div>
            
        </>
    );
};

export default MenuCategory;