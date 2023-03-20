import { useContext} from "react";
import { EcommerceContext } from "../../context/EcommerceContext";

interface CommerceProps {
  setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CommerceInfo = ({ setShowCard }: CommerceProps) => {
  const { nProducts, setNProducts } = useContext(EcommerceContext);

  return (
    <div className="commerce-info">
      <h3 className="commerce-name">Sneaker Company</h3>
      <h4 className="commerce-product-name">Fall Limited Edition Sneakers</h4>
      <p className="product-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <article className="sneaker__price">
        <div className="sneaker__aft-price">
          <p className="actual-price">$125.00</p>
          <p className="discount">50%</p>
        </div>
        <div className="sneaker__bef-price">$ 250.00</div>
      </article>
      <article className="price-controllers">
        <button
          className="change_price"
          aria-label="add product"
          onClick={() => {
            nProducts > 0 && setNProducts(nProducts - 1);
          }}
        ></button>
        <div className="quantity">{nProducts}</div>
        <button
          className="change_price"
          aria-label="remove product"
          onClick={() => {
            setNProducts(nProducts + 1);
          }}
        ></button>
      </article>
      <div
        className="add-product-btn"
        role="button"
        onClick={() => {
          (nProducts > 0) && setShowCard(true)
        }}
      >
        <div className="buy-icon"></div>
        <p>Add to card</p>
      </div>
    </div>
  );
};
