import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../features/cartSlice";
import Button from "../Button/Button";
import "./paymentForm.scss";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();
  const { cartTotal } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.user);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/createPaymentIntent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then((res) => res.json());

    const { paymentIntent } = response;
    const { client_secret } = paymentIntent;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) alert(paymentResult.error);
    if (paymentResult.paymentIntent.status === "succeeded") {
      alert(`Payment Successful, Total: $${cartTotal} USD`);
      dispatch(resetCart());
    }
  };

  return (
    cartTotal !== 0 && (
      <div className="payment-form-container">
        <form className="form-container" onSubmit={paymentHandler}>
          <h2>Credit Card Payment: </h2>

          <CardElement>PaymentForm</CardElement>
          <Button
            buttonType="inverted"
            isLoading={isProcessingPayment}
            payment={"payment"}
          >
            Pay Now
          </Button>
        </form>
      </div>
    )
  );
};

export default PaymentForm;
