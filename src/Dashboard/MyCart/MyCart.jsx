import { Helmet } from "react-helmet-async";
import useCart from "../../Hooks/useCart";
import SectionTitle from "../../Shared/SectionTitle";

const MyCart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);

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
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      
    </tbody>
  </table>
</div>
    </>
  );
};

export default MyCart;
