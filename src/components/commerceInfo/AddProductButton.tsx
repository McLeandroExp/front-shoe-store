import { useContext } from "react";
import { EcommerceContext } from "../../context/EcommerceContext";

export const AddProductButton = () => {
  const { nProducts, setShowCard } = useContext(EcommerceContext);
  return (
    <div
      className="add-product-btn"
      role="button"
      onClick={() => {
        nProducts > 0 && setShowCard(true);
      }}
    >
      <div className="buy-icon"></div>
      <p className="buy-text">Add to card</p>
    </div>
  );
};
