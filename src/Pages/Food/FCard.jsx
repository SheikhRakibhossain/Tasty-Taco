const FCard = ({ item }) => {
  const { image, price, name, recipe } = item;

  const handleAddToCart = (CartFood) => {
    console.log(CartFood);
  };

  return (
    <>
      <div className="card w-auto  bg-base-100 shadow-xl">
        <figure className="border-0 relative">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <span className="absolute top-2 right-2 px-4 py-2 bg-[#00000085] text-white">
          ${price}
        </span>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-primary btn-sm"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FCard;
