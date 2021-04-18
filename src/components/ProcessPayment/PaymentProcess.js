import React from 'react';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardFrom from './SimpleCardFrom';


const stripePromise = loadStripe('pk_test_51IeMU0HJE1x3Hg7xtlLN3sTwGuMbq3cQOHr0BlenTowffuALNqVNKyTfhdcz5m0jveeQoumi8kjmeaEdKCj5t53000G5cPfECq');

const PaymentProcess = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
        
<SimpleCardFrom handlePayment={handlePayment}></SimpleCardFrom>

        </Elements>
      );
    };
export default PaymentProcess;

