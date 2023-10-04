const MenuItems = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <>
      <div className="sm:flex-row md:flex justify-center  items-center gap-3 ">
        <div>
          <img src={image} className="w-full p-1 md:w-20  rounded" alt="reicipe image here" />
        </div>
        <div className="flex justify-center ">
          <div>
            <p className="font-semibold">{name} ------</p>
            <p>{recipe}</p>
          </div>
          <div className="text-yellow-500">${price}</div>
        </div>
      </div>
    </>
  );
};

export default MenuItems;
