// import React, { useRef } from "react";
// import "./CategorySlider.css"; // Import styles

// const categories = [
//   {  name: "My Feed", img: "https://n-img3.junaroad.com/assets/images/mobileNotif/img-1628498908811.jpg" },
//   { name: "T-SHIRT", img: "https://n-img0.junaroad.com/images/icons/men/tshirts.png" },
//   { name: "SHIRTS", img: "https://n-img0.junaroad.com/images/icons/men/shirts.png" },
//   { name: "JEANS", img: "https://n-img4.junaroad.com/images/icons/men/jeans.png" },
//   { name: "TROUSERS", img: "https://n-img0.junaroad.com/images/icons/men/trousers.png" },
//   { name: "ETHINC SETS", img: "https://n-img0.junaroad.com/images/icons/men/ethnicsets.png" },
//   { name: "FOOT-WARE", img: "https://n-img0.junaroad.com/images/icons/men/footwear.png" },
//   { name: "HOME", img: "https://n-img4.junaroad.com/images/icons/women/home.png " },
//   { name: "ACCESSORY", img: "https://n-img3.junaroad.com/images/icons/men/accessory.png" },
//   { name: "WINTER", img: "https://n-img2.junaroad.com/images/icons/men/winter.png" },
 
  
  

// ];

// const CategorySlider = () => {
//   const scrollRef = useRef(null);

//   const scroll = (scrollOffset) => {
//     scrollRef.current.scrollLeft += scrollOffset;
//   };

//   return (
//     <div className="category-slider-container">
//       <button className="scroll-btn left" onClick={() => scroll(-150)}>❮</button>

//       <div className="category-slider" ref={scrollRef}>
//         {categories.map((category, index) => (
//           <div key={index} className="category-item">
//             <img src={category.img} alt={category.name} className="category-img" />
//             <p>{category.name}</p>
//           </div>
//         ))}
//       </div>

//       <button className="scroll-btn right" onClick={() => scroll(150)}>❯</button>
//     </div>
//   );
// };

// export default CategorySlider;

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./CategorySlider.css";

const categories = [
  { name: "My Feed", img: "https://n-img3.junaroad.com/assets/images/mobileNotif/img-1628498908811.jpg" },
  { name: "T-SHIRT", img: "https://n-img0.junaroad.com/images/icons/men/tshirts.png" },
  { name: "SHIRTS", img: "https://n-img0.junaroad.com/images/icons/men/shirts.png" },
  { name: "JEANS", img: "https://n-img4.junaroad.com/images/icons/men/jeans.png" },
  { name: "TROUSERS", img: "https://n-img0.junaroad.com/images/icons/men/trousers.png" },
  { name: "ETHNIC SETS", img: "https://n-img0.junaroad.com/images/icons/men/ethnicsets.png" },
  { name: "FOOTWEAR", img: "https://n-img0.junaroad.com/images/icons/men/footwear.png" },
  { name: "HOME", img: "https://n-img4.junaroad.com/images/icons/women/home.png" },
  { name: "ACCESSORY", img: "https://n-img3.junaroad.com/images/icons/men/accessory.png" },
  { name: "WINTER", img: "https://n-img2.junaroad.com/images/icons/men/winter.png" },
];

const CategorySlider = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate(); // Hook for navigation

  const handleCategoryClick = (category) => {
    navigate(`/products/${category.toLowerCase().replace(/\s+/g, "-")}`); // Navigate to products page
  };

  return (
    <div className="category-slider-container">
      <button className="scroll-btn left" onClick={() => scrollRef.current.scrollLeft -= 150}>❮</button>

      <div className="category-slider" ref={scrollRef}>
        {categories.map((category, index) => (
          <div key={index} className="category-item" onClick={() => handleCategoryClick(category.name)}>
            <img src={category.img} alt={category.name} className="category-img" />
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      <button className="scroll-btn right" onClick={() => scrollRef.current.scrollLeft += 150}>❯</button>
    </div>
  );
};

export default CategorySlider;
