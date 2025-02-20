import React, { useState } from "react";
import "./styles.css"; // Import styles

const categories = [
  {
    title: "Ethnic Wear",
    items: [
      "Kurta Kurtis",
      "Sarees",
      "Ethnic Sets",
      "Ethnic Co Ord Sets",
      "Lehengas And Blouse",
      "Ethnic Dresses",
      "Skirts",
      "Leggings, Salwar & Churidar",
      "Shawls & Dupattas",
    ],
  },
  {
    title: "Western Wear",
    items: ["Dresses", "Tops", "Tunics", "T-Shirts", "Jeans & Jeggings", "Trousers", "Co Ord Set", "Shirts", "Jumpsuits"],
  },
  {
    title: "Sports & Activewear",
    items: ["Swim Wear", "Tights", "Track Pants", "Sports Bra"],
  },
  {
    title: "Jewellery",
    items: ["Earrings", "Necklace & Pendants", "Rings, Bangles & Bracelets"],
  },
  {
    title: "Footwear",
    items: ["Flats", "Heels", "Casual Shoes", "Flip Flops", "Sport Shoes & Sneakers", "Boots"],
  },
  {
    title: "Electronics",
    items: ["Smart Watches", "Bluetooth Speaker", "Earbuds", "Bluetooth Neckband"],
  },
  {
    title: "Brands",
    items: ["Baggit", "Globus", "Hive91", "IUGA", "MELON - By PlusS", "Mojilaa", "Trendif", "Vaamsi"],
  },
];

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mega-menu-container">
      <nav>
        <ul className="nav-links">
          <li onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <span className="menu-title">WOMEN</span>
            {isOpen && (
              <div className="mega-menu">
                {categories.map((category, index) => (
                  <div key={index} className="mega-column">
                    <h4>{category.title}</h4>
                    <ul>
                      {category.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MegaMenu;

