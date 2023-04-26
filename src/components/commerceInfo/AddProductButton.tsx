import { FC, useContext } from "react";
import { EcommerceContext } from "../../context/EcommerceContext";
import { useQuery } from "react-query";
import { getProducts } from "../../helpers/queries";
import { useNavigate } from "react-router-dom";

interface AddProductButtonProps {
  idProduct: string;
}

export const AddProductButton: FC<AddProductButtonProps> = ({ idProduct }) => {
  const navigate = useNavigate();
  const { setShowCard, setArrProducts, arrProducts, userToken } =
    useContext(EcommerceContext);
  const { data: products } = useQuery(["getProducts"], getProducts);
  return (
    <div
      className="add-product-btn"
      role="button"
      onClick={() => {
        if (!userToken) {
          return navigate("/login");
        }

        if (products) {
          const existeProd = arrProducts.findIndex((pr) => pr.id === idProduct);
          if (existeProd === -1 && idProduct !== "") {
            setArrProducts((prods) => [
              ...prods,
              { id: idProduct, cantidad: 1 },
            ]);
          }
          setShowCard(true);
        }
      }}
    >
      <div className="buy-icon"></div>
      <p className="buy-text">Add to card</p>
    </div>
  );
};
