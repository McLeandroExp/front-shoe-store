import { useContext } from "react";
import { EcommerceContext } from "../../context/EcommerceContext";
import img1 from "../../images/image-product-1.jpg";

interface ProductCardProps {
  setShowProduct: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ProductCard = ({ setShowProduct }: ProductCardProps) => {
  const { nProducts, setNProducts } = useContext(EcommerceContext);

  return (
    <article className="cardbuy__info">
      <div className="cbinfo__content">
        <img className="cardbuy__image" src={img1} alt="buycard" />
        <div className="cbinfo__content-text">
          <h4 className="cbproduct__title">Autumn Edition Sneakers</h4>
          <p className="cbproduct__quantity">
            $125 x {nProducts}
            <span className="cbproduct__price">${125 * nProducts}</span>{" "}
          </p>
        </div>
      </div>
      <div
        className="cbinfo__delete"
        role="button"
        onClick={() => {
          setShowProduct(false);
          setNProducts(0);
        }}
      ></div>
    </article>
  );
};
