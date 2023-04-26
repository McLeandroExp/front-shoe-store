import { useContext, useEffect, useState } from "react";
import { EcommerceContext } from "../../context/EcommerceContext";
import img1 from "../../images/image-product-1.jpg";
import { useQuery } from "react-query";
import { getProducts } from "../../helpers/queries";
import { IProducto } from "../../types/models";

interface ProductCardProps {
  idProduct: string;
}
export const ProductCard = ({ idProduct }: ProductCardProps) => {
  const { setArrProducts, arrProducts } = useContext(EcommerceContext);
  const { data: products, isLoading } = useQuery(["getProducts"], getProducts);
  const [product, setProduct] = useState<IProducto | undefined>(undefined);
  useEffect(() => {
    if (products) {
      const prod = products.find((pr) => pr._id === idProduct);
      setProduct(prod);
    }
  }, [products]);

  return (
    <article className="cardbuy__info">
      <div className="cbinfo__content">
        <img className="cardbuy__image" src={product?.imgs[0]} alt="buycard" />
        <div className="cbinfo__content-text">
          <h4 className="cbproduct__title">{product?.nombre}</h4>
          <p className="cbproduct__quantity">
            {`${product?.precio} x ${1}`}
            <span className="cbproduct__price">
              ${product && product.precio * 1}
            </span>
          </p>
        </div>
      </div>
      <div
        className="cbinfo__delete"
        role="button"
        onClick={() => {
          setArrProducts(arrProducts.filter((prod) => prod.id !== idProduct));
          // setShowProduct(false);
          // setNProducts(0);
        }}
      ></div>
    </article>
  );
};
