import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

const Payment = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const handlePayment = () => {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: product.price * 100, 
      currency: "INR",
      name: "Limeroad Clone",
      description: `Payment for ${product.name}`,
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "User Name",
        email: "user@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#ff6600",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div>
      <h2>Payment for {product.name}</h2>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
