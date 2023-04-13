import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { EcommerceContext } from "../../context/EcommerceContext";
import { useQuery, useQueryClient } from "react-query";
import { getProducts } from "../../helpers/queries";
import { IProducto } from "../../types/models";

interface CommerceProps {
  setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
  productPos: number;
  setProductPos: React.Dispatch<React.SetStateAction<number>>;
}
interface ProductInfo {
  nombre: string;
  nombre_empresa: string;
  precio: number;
  categoria: { nombre: string; _id: string };
  descripcion: string;
  descuento: number;
}
export const CommerceInfo = ({
  setShowCard,
  productPos,
  setProductPos,
}: CommerceProps) => {
  const { nProducts, setNProducts } = useContext(EcommerceContext);
  const {
    data: products,
    isFetched,
    isLoading,
  } = useQuery(["getProducts"], getProducts);
  const [productInfo, setProductInfo] = useState<ProductInfo[] | undefined>(
    undefined
  );
  useEffect(() => {
    if (products) {
      const prod = products.map(
        ({
          nombre,
          nombre_empresa,
          precio,
          categoria,
          descripcion,
          descuento,
        }) => ({
          nombre,
          nombre_empresa,
          precio,
          categoria,
          descripcion,
          descuento,
        })
      );
      setProductInfo(prod);
    }
  }, [products]);

  return (
    <div className="commerce-info">
      <h3 className="commerce-name">
        {productInfo ? (
          isLoading ? (
            <span className="loader" />
          ) : (
            productInfo[productPos].nombre_empresa
          )
        ) : (
          ``
        )}
      </h3>
      <h4 className="commerce-product-name">
        {productInfo
          ? productInfo[productPos].nombre
          : "Fall Limited Edition Sneakers"}
      </h4>
      <p className="product-description">
        {productInfo ? productInfo[productPos].descripcion : ""}
      </p>
      <article className="sneaker__price">
        <div className="sneaker__aft-price">
          <p className="actual-price">
            {productInfo
              ? `$${
                  productInfo[productPos].precio *
                  productInfo[productPos].descuento *
                  0.01
                }`
              : "$50"}
          </p>
          <p className="discount">
            {productInfo ? `${productInfo[productPos].descuento}%` : "50%"}
          </p>
        </div>
        <div className="sneaker__bef-price">
          {productInfo ? `$ ${productInfo[productPos].precio}` : "$50"}
        </div>
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
          nProducts > 0 && setShowCard(true);
        }}
      >
        <div className="buy-icon"></div>
        <p>Add to card</p>
      </div>
    </div>
  );
};
