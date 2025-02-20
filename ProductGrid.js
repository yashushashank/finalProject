import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    image: "https://n-img3.junaroad.com/stories/story_p_67a5f18f429fe29cb881954b-1739434753.jpeg",
    extraImages: 18,
    seller: "Trend Experts",
    followers: "34K",
    likes: 50,
  },
  {
    image: "https://n-img2.junaroad.com/stories/story_p_678f3c0fc8c932ec03c1dee6-1738156990.jpeg",
    extraImages: 17,
    seller: "Trend Experts",
    followers: "34K",
    likes: 3,
  },
  {
    image: "https://n-img3.junaroad.com/stories/story_p_678f32c1107665d19bb5f162-1737447892.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 4,
  },
  {
    image: "https://n-img3.junaroad.com/stories/story_p_67aefff1f77e5b3e2327ec06-1739779206.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 5,
  },
  {
    image: "https://n-img0.junaroad.com/stories/story_p_67b2e8d91076657a1ca46163-1739787774.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 6,
  },
  {
    image: "https://n-img3.junaroad.com/stories/story_p_678f24be209967094478e39f-1737448095.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 7,
  },
  {
    image: "https://n-img3.junaroad.com/stories/story_p_67973b28107665d19bbe5f38-1737982375.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 8,
  },
  {
    image: "https://n-img0.junaroad.com/stories/story_p_67976da9c8c932ec03ca0fec-1737982040.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 9,
  },
  {
    image: "https://n-img3.junaroad.com/stories/story_p_67a4961f7c7328328b9396f7-1739428995.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 10,
  },
  {
    image: "https://n-img3.junaroad.com/stories/story_p_67ad71ee7c7328b9ef15e32b-1739779287.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 11,
  },
  {
    image: "https://n-img0.junaroad.com/stories/story_p_67a5d7b420996709448ee720-1739365502.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 12,
  },
  {
    image: "https://n-img3.junaroad.com/stories/story_p_67a46fb7f77e5bd0c07b3fa0-1739771451.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 13,
  },
  {
    image: "https://n-img0.junaroad.com/stories/story_p_67a35004c8c932ec03d5afe3-1738845985.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 14,
  },
  {
    image: "https://n-img0.junaroad.com/stories/story_p_67a46a547c7328328b933ddf-1739530134.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 15,
  },
  {
    image: "https://n-img1.junaroad.com/stories/story_p_6798adaa7c7328328b87fca9-1738064390.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 16,
  },
  {
    image: "https://n-img4.junaroad.com/stories/story_p_67ac8b487c73284d3a563d57-1739365216.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 17,
  },
  {
    image: "https://n-img1.junaroad.com/stories/story_p_67ac95b0107665c37e5aa95e-1739365386.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 18,
  },
  {
    image: "https://n-img3.junaroad.com/stories/story_p_67a9f72b429fe20955dd63fb-1739530557.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 19,
  },
  {
    image: "https://n-img2.junaroad.com/stories/story_p_6787a405106c020793c3135c-1738156851.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 20,
  },
  {
    image: "https://n-img1.junaroad.com/stories/story_p_67878ed4429fe2079de7db38-1737098191.jpeg",
    extraImages: 22,
    seller: "Trend Experts",
    followers: "34K",
    likes: 21,
  },
];

function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
