import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  const handleDelete = (item) => {
    // console.log(item._id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Your Food has been deleted",
                showConfirmButton: false,
                icon: "success",
                timer: 1000,
              });
            }
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Testy Taco || My Cart</title>
      </Helmet>
      <div className="py-6">
        <p className="text-center italic">----- My Cart -----</p>
        <h3 className="text-center text-4xl uppercase font-semibold">Wanna To Add More</h3>

      </div>

      {/* table all */}
      <div className="overflow-x-auto min-w-full">
        <div className="flex justify-between bg-purple-400  py-4 px-4">
          <h2 className="text-2xl font-semibold text-white">Total product added {cart.length}</h2>
          <h2 className="text-2xl font-semibold text-white">Total $ {totalPrice.toFixed(2)}</h2>
          <button className="btn btn-primary btn-sm">Pay Money</button>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index+1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask  w-12 h-12">
                      <img src={item.image} alt="food image" />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td
                  onClick={() => handleDelete(item)}
                  className="hover:cursor-pointer "
                >
                  <FaTrash className="border p-2 text-4xl rounded bg-red-500 hover:text-yellow-400" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyCart;
