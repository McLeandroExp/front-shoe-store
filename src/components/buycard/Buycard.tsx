import { useContext, useState } from "react";
import { EcommerceContext } from "../../context/EcommerceContext";
import { ProductCard } from "./ProductCard";
import { useNavigate } from "react-router-dom";

export const Buycard = () => {
  const { setShowCard, arrProducts } = useContext(EcommerceContext);
  const navigate = useNavigate();
  return (
    <section className="cardbuy">
      <img
        src="./assets/images/icon-close.svg"
        alt="close"
        className="img-close-card"
        onClick={() => setShowCard(false)}
      />
      <h4 className="cardbuy__title">BuyCard</h4>
      <hr />
      {arrProducts.length > 0 ? (
        arrProducts.map((prod) => (
          <ProductCard idProduct={prod.id} key={prod.id} />
        ))
      ) : (
        <div className="empty-cardbuy">
          <p>Your buycard is empty</p>
        </div>
      )}
      <button
        className="add-product-btn"
        onClick={() => {
          setShowCard(false);
          navigate("/buy");
        }}
      >
        Buy Now
      </button>
    </section>
  );
};
