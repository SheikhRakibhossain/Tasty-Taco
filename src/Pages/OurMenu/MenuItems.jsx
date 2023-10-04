const MenuItems = ({ item }) => {
  const { image, price, name, recipe } = item;
  return (
    <>
      <div className="sm:flex-row md:flex justify-center  items-center gap-3 ">
        <div className="w-20">
          <img src={image}  alt="reicipe image here" className="w-16 h-16 object-cover" style={{borderRadius:"0 50% 40% 50%"}} />
        </div>
        <div className="flex justify-center flex-grow ">
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
