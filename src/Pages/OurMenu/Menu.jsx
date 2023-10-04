import useMenu from "../../Hooks/useMenu";
import MenuCategory from "./MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    console.log(menu)
    const popular = menu.filter(item=> item.category ==="popular");
    const pizza = menu.filter(item=> item.category ==="pizza");
    const dessert = menu.filter(item=> item.category ==="dessert");
    const offered = menu.filter(item=> item.category ==="offered");
    const soup = menu.filter(item=> item.category ==="soup");
    const salad = menu.filter(item=> item.category ==="salad");
    const drinks = menu.filter(item=> item.category ==="drinks");

    return (
        <>
            <MenuCategory items={popular} />
        </>
    );
};

export default Menu;