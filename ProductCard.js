// 
import React from "react";
import { FaHeart, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`, { state: { product } }); // Send product data
  };

  return (
    <div className="product-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="product-image">
        <img src={product.image} alt="Product" />
        {product.extraImages && <div className="extra-images">+{product.extraImages}</div>}
      </div>
      <div className="product-info">
        <p className="seller">By <b>{product.seller}</b></p>
        <p className="followers">{product.followers} Followers</p>
        <div className="actions">
          <FaHeart className="icon heart" /> {product.likes} Likes
          <FaWhatsapp className="icon whatsapp" /> Share
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
