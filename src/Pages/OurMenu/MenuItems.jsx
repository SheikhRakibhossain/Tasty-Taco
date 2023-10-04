const MenuItems = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <div>
          <img src={image} className="w-20  rounded" alt="reicipe image here" />
        </div>
        <div className="flex justify-center ">
          <div>
            <p>{name} --------------------</p>
            <p>{recipe}</p>
          </div>
          <div className="text-yellow-500">${price}</div>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
