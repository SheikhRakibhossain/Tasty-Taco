import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users")
    return res.json();
  });

  return (
    <>
      <h2>I am all users page</h2>
      <h2>All users {users.length}</h2>
    </>
  );
};

export default AllUsers;
