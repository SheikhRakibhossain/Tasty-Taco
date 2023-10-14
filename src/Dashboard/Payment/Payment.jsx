import { Helmet } from "react-helmet-async";

const Payment = () => {
    return (
        <>
        <Helmet>
        <title>Testy Taco |Payment</title>
      </Helmet>
      <div className="py-6">
        <p className="text-center italic">----- Paymnet Proceccing -----</p>
        <h3 className="text-center text-4xl uppercase font-semibold">
payment here        </h3>
      </div>
        <div>
            <h2>I am payment page</h2>
        </div>
            
        </>
    );
};

export default Payment;