
const MenuCover = ({menuTitle, menuDescription, menuImage}) => {
    return (
        <>
     <div className="relative ">
      {/* Background Image */}
      <img
        src={menuImage}
        alt="Background Image"
        className="w-full h-full object-cover"
      />

      {/* Centered Text and Div */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full md:w-1/2">
        <div className=" bg-black bg-opacity-50 p-4 md:py-10 rounded-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl pb-4 font-bold uppercase">{menuTitle}</h1>
          <p>{menuDescription}</p>
        </div>
      </div>
    </div>
            
        </>
    );
};

export default MenuCover;