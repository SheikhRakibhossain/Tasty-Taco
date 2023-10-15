import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./payment.css";
import { useEffect, useState } from "react";
import useAxiousSecure from "../../Hooks/useAxiousSecure";
import useAuth from "../../Hooks/useAuth";

const CheckOut = ({ price }) => {
  const {user} = useAuth()
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const { axiosSecure } = useAxiousSecure();
  const [clientSecret, setClientSecret] = useState("");


  // price intent create
  useEffect(() => {
    axiosSecure.post("/client-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret)
    });


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

    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email:user?.email || "anonimous",
            name: user?.displayName || "anonimous",
          },
        },
      },
    );
    if(confirmError){
      // setCardError(confirmError)
      console.log("I am a confrim error",confirmError)
    }
    console.log("I am payment intent", paymentIntent)




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
          <button type="submit" disabled={!stripe || !clientSecret}>
            Pay
          </button>
        </form>
        <div className="text-2xl text-red-500 text-center">
          {cardError && <p>{cardError}</p>}
        </div>
      </div>
    </>
  );
};

export default CheckOut;
