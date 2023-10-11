import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./useAxiousSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  // const token = localStorage.getItem("access-token");
const [axiousSecure] = useAxiousSecure();
  const {refetch, data:cart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    
queryFn: async()=>{
  const res = await axiousSecure(`/carts?email=${user?.email}`)
  console.log(`res from data`, res);
  return res.data;


}

    // queryFn: async () =>{
    //   const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{

    //   headers:{
    //     authorization:`Bearer ${token}`
    //   }

    //   })
    //     return res.json();
    // }
  });
  return [cart, refetch];
};

export default useCart;
