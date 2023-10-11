import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiousSecure from "./useAxiousSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const [axiousSecure] = useAxiousSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiousSecure.get(`/users/admin/${user?.email}`);
      console.log("is admin response", res);
      return res.data.admin;
    },
  });

  return [isAdmin, isAdminLoading];
};

export default useAdmin;