import { Helmet } from "react-helmet-async";
import useMenu from "./../../../Hooks/useMenu";
import { FaFax, FaTrash } from 'react-icons/fa';

const ManageItem = () => {
  const [menu, loading] = useMenu();
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

      <div className="overflow-x-auto">
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
            {menu.map((item) => (
              <tr key={item._id}>
                <th>
                  <label>1</label>
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
                <td>{item.price}</td>
                <td>

                  <button className="btn btn-ghost btn-xs"><FaTrash></FaTrash></button>
                </td>
                <td>
                <button className="btn btn-ghost btn-xs">  <FaFax></FaFax></button>
                
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
