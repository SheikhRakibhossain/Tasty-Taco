import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./payment.css";
import { useEffect, useState } from "react";
import useAxiousSecure from "../../Hooks/useAxiousSecure";
import useAuth from "../../Hooks/useAuth";

const CheckOut = ({ price, cart }) => {
  const { user } = useAuth();

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [axiosSecure] = useAxiousSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [proceccing, setProceccing] = useState();
  const [ tranjectionId, setTranhjectionId] = useState('');

  // price intent create

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
    console.log(price);
  }, [price, axiosSecure]);

  // handle submit stripe form
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      console.log("[error]", error);
    } else {
      setCardError("");
      console.log("[PaymentMethod] success data", paymentMethod);
    }
    // load form https://stripe.com/docs/js/payment_intents/confirm_card_payment
setProceccing(true)
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonimous",
            name: user?.displayName || "anonimous",
          },
        },
      });
    if (confirmError) {
      // setCardError(confirmError)
      console.log("I am a confrim error", confirmError);
    }
    console.log("I am payment intent", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      setProceccing(false)
      setTranhjectionId( paymentIntent.id)
      // const payId = paymentIntent.id;

      // save info for the client
      const payment = {
        email:user?.email,
        price,
        tranjectionId:paymentIntent.id,
        quantity:cart.length,
        items:cart.map(item=>item._id),
        itemsName: cart.map(item=>item.name)
      }

      axiosSecure.post('/payments',payment).then(res=>{
        console.log('payout user data and shop details',res.data)
        if(res.data.insertedId){
          // todo
        }

      })

    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button type="submit" disabled={!stripe || !clientSecret || proceccing}>
            Pay
          </button>
        </form>
        <div className="text-2xl text-red-500 text-center">
          {cardError && <p>{cardError}</p>}
        </div>
        <div className="text-2xl text-green-500 text-center">
          {tranjectionId && <p>Payment has succeeded</p>}
        </div>
      </div>
    </>
  );
};

export default CheckOut;
