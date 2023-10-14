import { Helmet } from "react-helmet-async";
import CheckOut from "./CheckOut";
import { loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_SECRET_PUBLISHABLE_KEY);

  return (
    <>
      <Helmet>
        <title>Testy Taco |Payment</title>
      </Helmet>
      <div className="py-6">
        <p className="text-center italic">----- Paymnet Proceccing -----</p>
        <h3 className="text-center text-4xl uppercase font-semibold">
          payment here{" "}
        </h3>
      </div>
      <div>
        <h2>I am payment page</h2>
      </div>
      {/* payment checkout form */}
      <div className="w-full">
        <Elements stripe={stripePromise}>
          <CheckOut></CheckOut>
        </Elements>
      </div>
    </>
  );
};

export default Payment;
