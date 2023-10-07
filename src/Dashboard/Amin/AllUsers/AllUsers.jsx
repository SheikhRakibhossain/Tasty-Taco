import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrash, FaUserAltSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleDelete = (user) => {
    console.log("norml user", user);
    refetch();
  };
  const handleUserRole = (user) => {
    // console.log("hadle role click", user);
    fetch(`http://localhost:5000/users/admin/${user._id}`,{
        method:"PATCH",
    })
    .then(res => res.json())
    .then(data =>{
        refetch();
        if(data.modifiedCount){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is now a admin`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    
    })
    .catch(error =>console.log("going to make admin error",error))
    
  };
  return (
    <>
      <Helmet>
        <title>Testy Taco | All users</title>
      </Helmet>
      <div className="py-6">
        <p className="text-center italic">----- All Users -----</p>
        <h3 className="text-center text-4xl uppercase font-semibold">
          Hers{"'"}s Your website all users
        </h3>
      </div>

      {/* table all */}
      <div className="overflow-x-auto min-w-full">
        <div className="flex justify-between bg-purple-400  py-4 px-4">
          <h2 className="text-2xl font-semibold text-white">
            Total Users: {users.length}
          </h2>
          <h2 className="text-2xl font-semibold text-white">Total </h2>
          <button className="btn btn-primary btn-sm">Action</button>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <FaUserAltSlash
                      onClick={() => handleUserRole(user)}
                      className="border p-2 text-4xl hover:cursor-pointer  rounded bg-gray-900-500 hover:text-primary"
                    />
                  )}
                </td>
                <td
                  onClick={() => handleDelete(user)}
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

export default AllUsers;
