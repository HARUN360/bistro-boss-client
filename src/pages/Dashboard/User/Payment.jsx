
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from './../../../SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// ToDo: add published ke
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk)

const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please pay to eat"></SectionTitle>
            <div>
              <Elements stripe={stripePromise}>
                 <CheckoutForm></CheckoutForm>
              </Elements>
            </div>
        </div>
    );
};

export default Payment;