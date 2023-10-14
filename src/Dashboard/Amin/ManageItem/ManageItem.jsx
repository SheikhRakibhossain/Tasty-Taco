import { Helmet } from "react-helmet-async";
import useMenu from "./../../../Hooks/useMenu";
import { FaFax, FaTrash } from "react-icons/fa";
import useAxiousSecure from "./../../../Hooks/useAxiousSecure";
import Swal from "sweetalert2";

const ManageItem = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiousSecure();
  // menu item deleted function
  const handleMenuItemDelete = (item) => {
    // axiosSecure.delete(`/menu/${item._id}`)
    
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
        axiosSecure.delete(`/menu/${item._id}`).then((data) => {
          console.log("deleted menu data", data.data);
          if (data.data.deletedCount > 0) {
            refetch();
            return Swal.fire(
              "Deleted!",
              "Your file has been deleted.",
              "success"
            );
          }
        });
      }
    });

  
    console.log(item);
  };
  return (
    <>
      <Helmet>
        <title>Testy Taco | Mange item</title>
      </Helmet>
      <div className="py-6">
        <p className="text-center italic">----- Manage Item -----</p>
        <h3 className="text-center text-4xl uppercase font-semibold">
          Manage{"'"}s Your Menu Items
        </h3>
      </div>

      {/* table for menu item */}

      <div className="overflow-x-auto w-full px-3">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => handleMenuItemDelete(item)}
                    className="btn btn-warning btn-xs"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </td>
                <td>
                  <button className="btn btn-primary btn-xs">
                    {" "}
                    <FaFax></FaFax>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageItem;
