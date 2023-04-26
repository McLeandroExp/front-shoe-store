import { useContext, useEffect, useState } from "react";
import { EcommerceContext } from "../../context/EcommerceContext";
import { useQuery } from "react-query";
import { getProducts } from "../../helpers/queries";
import { ProductInfo } from "../../types/req_res";
import { AddProductButton } from "./AddProductButton";
import { QuantityController } from "./QuantityController";

export const CommerceInfo = () => {
  const { nProducts, setNProducts, productPos, setShowCard } =
    useContext(EcommerceContext);
  const { data: products, isLoading } = useQuery(["getProducts"], getProducts);
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
          _id,
        }) => ({
          nombre,
          nombre_empresa,
          precio,
          categoria,
          descripcion,
          descuento,
          _id,
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
              ? `$ ${(
                  productInfo[productPos].precio *
                  (1 - productInfo[productPos].descuento * 0.01)
                ).toFixed(2)}`
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
      {/* <article className="price-controllers">
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
      </article> */}
      <AddProductButton
        idProduct={productInfo ? productInfo[productPos]._id : ""}
      />
    </div>
  );
};
