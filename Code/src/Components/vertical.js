import React from "react";
import "./vertical.css";

const Card = ({
  title,
  imageUrl,
  textClassName,
  imageClassName,
  textContent,
  textDescription,
}) => (
  <article className="card">
    <div className="card-content">
      <div className={`card-image ${imageClassName}`}>
        <img src={imageUrl} alt={title} className="card-img" />
      </div>
      <div className={`card-text ${textClassName}`}>
        <h1>{title}</h1>
        <h3>{textContent}</h3>
        <p>{textDescription}</p>
      </div>
    </div>
  </article>
);

function Content() {
  return (
    <div className="MultiContent">
      <Card
        title="Jewellry"
        imageUrl="https://i.pinimg.com/564x/27/6f/3c/276f3c7174c3132fb9ec057b1fffa7f9.jpg"
        textClassName="JewelleryText"
        imageClassName="JwelImage"
        textContent="Is your jewelry collection as authentic as you? Find timeless pieces that reflect your true essence."
        textDescription="Confirm the authenticity of your jewelry with trust and confidence. Rely on us to guarantee the originality of your pieces, offering you peace of mind. Adorn yourself with jewelry that has undergone thorough authentication."
      />

      <Card
        title="Cosmetics"
        imageUrl="https://wallpapercave.com/wp/wp2004296.jpg"
        textClassName="CosmeticsText"
        imageClassName="CosImage"
        textContent="Seeking genuine beauty products that truly deliver? Discover integrity in every application."
        textDescription="Unveil the truth behind your cosmetic choices by ensuring they originate from the genuine source. Embrace the confidence that comes with verified products, promising you a radiant and glamorous allure. Let your beauty shine, backed by the assurance of authenticity "
      />
      <Card
        title="Clothes"
        imageUrl="https://i.pinimg.com/564x/7d/2d/42/7d2d42174993fb1d871b1354550b44e8.jpg"
        textClassName="ClothesText"
        imageClassName="ClothImage"
        textContent="Are you sure of wearing the right Outfit? Why not Find it ?"
        textDescription=" Walk in style, knowing each piece is genuine, bringing you the latest fashion with the confidence of verification. Elevate your wardrobe, embrace originality"
      />
      <Card
        title="Food"
        imageUrl="https://img.freepik.com/premium-photo/close-up-dark-minimalist-background-realistic-food_670382-59738.jpg"
        textClassName="FoodText"
        imageClassName="FoodImage"
        textContent="Ever wondered what true freshness tastes like? Find the Legitimacy And be Sure!"
        textDescription=" Your ultimate dining companion!Effortlessly identify any food product with precision and ease using our cutting-edge system. With instant access to detailed information including ingredients, nutritional values, and allergens, make informed decisions and discover new flavors confidently. Say goodbye to guessing games and hello to a seamless culinary journey with Us."
      />
    </div>
  );
}
export default Content;
