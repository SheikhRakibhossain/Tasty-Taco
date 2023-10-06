import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const FCard = ({ item }) => {
  const { image, price, name, recipe } = item;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToCart = (CartFood) => {
    console.log(CartFood);
    if (user) {
      // console.log(user)
      fetch("http://localhost:5000/carts")
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Product has added to the cart",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
    }
    else {
      Swal.fire({
        title: 'Please Login before Buying',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Re-directed to login page!',
            'click ok and login for added the food',
            'success',
            navigate('/login')
          )
        }
      })
    }
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
