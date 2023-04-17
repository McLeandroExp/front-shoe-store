import { useContext, useState } from "react";
import { EcommerceContext } from "../../context/EcommerceContext";
import { ProductCard } from "./ProductCard";

export const Buycard = () => {
  const { setNProducts, setShowCard } = useContext(EcommerceContext);
  const [showProduct, setShowProduct] = useState<boolean>(true);
  return (
    <section className="cardbuy">
      <h4 className="cardbuy__title">Card</h4>
      <hr />
      {showProduct ? (
        <ProductCard setShowProduct={setShowProduct} />
      ) : (
        <div className="empty-cardbuy">
          <p>Your cardbuy is empty</p>
        </div>
      )}
      <button
        className="add-product-btn"
        onClick={() => {
          setShowCard(false);
          setNProducts(0);
        }}
      >
        Checkout
      </button>
    </section>
  );
};
