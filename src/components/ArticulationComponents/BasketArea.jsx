import React from "react";
import Lottie from "react-lottie";

const BasketArea = ({ showAnimation, basketImage, animationData }) => (
    <div className="basket">
      {!showAnimation && (
        <img src={basketImage} alt="Basket" className="basket-image" />
      )}
      {showAnimation && animationData && (
        <Lottie
          options={{
            animationData: animationData,
            loop: false,
            autoplay: true,
          }}
          height={300}
          width={300}
        />
      )}
    </div>
  );

export default BasketArea;