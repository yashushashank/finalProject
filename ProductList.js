import React from "react";
import "./ProductList.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <div key={product.id} className="product-card">
            <img src="https://n-img0.junaroad.com/stories/story_p_67ad71ee7c7328b9ef15e32b-1739779287.jpeg" alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;

// import React from "react";
// import { Link } from "react-router-dom";
// import products from "../data/products";

// const ProductList = () => {
//   return (
//     <div>
//       <h2>Products</h2>
//       <div style={{ display: "flex", gap: "20px" }}>
//         {products.map((product) => (
//           <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
//             <img src={product.image} alt={product.name} width="150" />
//             <h3>{product.name}</h3>
//             <p>₹{product.price}</p>
//             <Link to={`/product/${product.id}`}>
//               <button>View Details</button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
