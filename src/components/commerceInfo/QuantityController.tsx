import React, { FC, useContext } from "react";
import { EcommerceContext } from "../../context/EcommerceContext";

interface QuantityControllerProps {
  id: string;
}

export const QuantityController: FC<QuantityControllerProps> = () => {
  const { nProducts, setNProducts, productPos, setShowCard } =
    useContext(EcommerceContext);
  return (
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
  );
};
