import { useQuery } from "react-query";
import { IProducto, IUsuario } from "../types/models";
import { getProductsByGender } from "../helpers/queries";
import { FC } from "react";
import { AddProductButton } from "../components";

interface GenderProps {
  gender: string;
}
export const Gender: FC<GenderProps> = ({ gender }) => {
  const { data: arrProductos, isLoading } = useQuery<IProducto[] | undefined>(
    ["getProductsByGender", gender],
    getProductsByGender(gender)
  );
  if (isLoading) {
    return <div>...loading</div>;
  }
  return (
    <div className="gender-container">
      {arrProductos?.map((producto) => (
        <div key={producto.nombre} className="producto">
          <h3>{producto.nombre}</h3>
          <img src={producto.imgs[0]} alt={producto.nombre} />
          <p>
            <span>Price:</span> {producto.precio}
          </p>
          <p>
            <span>Discount:</span> {producto.descuento}%
          </p>
          <p>
            <span>Description:</span> {producto.descripcion}
          </p>
          <p>
            <span>Sex:</span> {producto.sexo}
          </p>
          <p>
            <span>Provider:</span> {producto.nombre_empresa}
          </p>
          <AddProductButton />
        </div>
      ))}
    </div>
  );
};
