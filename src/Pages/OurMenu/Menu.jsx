import useMenu from "../../Hooks/useMenu";

const Menu = () => {
    const [menu] = useMenu();
    console.log(menu)
    const popular = menu.filter(item=> item.category ==="popular")
    return (
        <>
            
        </>
    );
};

export default Menu;