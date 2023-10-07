import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";
import SectionTitle from "../../Shared/SectionTitle";
import { FaTrash } from "react-icons/fa";

const MyCart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

  const handleDelete =(item)=>{

console.log(item._id)


  }

  return (
    <>
    <Helmet>
        <title>Testy Taco || My Cart</title>
    </Helmet>
    <SectionTitle title={"My cart"} subtitle={"Wan'na Add More ?"}></SectionTitle>
      <div>
        <h3>i am my cart Pages</h3>
        <h2>Total product added {cart.length}</h2>
        <h2>Total $ {totalPrice}</h2>
      </div>
      {/* table all */}
      <div className="overflow-x-auto">
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
      {
        cart.map(item =><tr key={item._id}>
            <th><div className="avatar">
              <div className="mask  w-12 h-12">
                <img src={item.image} alt="food image" />
              </div>
            </div></th>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td onClick={()=>handleDelete(item)} className="hover:cursor-pointer "><FaTrash/></td>
          </tr>)
      }
      
      
    </tbody>
  </table>
</div>
    </>
  );
};

export default MyCart;
