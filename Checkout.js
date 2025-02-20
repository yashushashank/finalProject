import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

const Checkout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div>
      <h2>Checkout</h2>
      <p>Selected Product: {product.name}</p>
      <p>Price: ₹{product.price}</p>
      
      <h3>Select Payment Method</h3>
      <button onClick={() => navigate(`/payment/${product.id}`)}>Pay with Razorpay</button>
    </div>
  );
};

export default Checkout;
