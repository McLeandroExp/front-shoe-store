import { useQuery } from "react-query";
import { IProducto, IUsuario } from "../types/models";
import { getProductsByGender } from "../helpers/queries";
import { FC, useContext, useEffect, useState } from "react";
import { AddProductButton, Buycard, GalleryDskActive } from "../components";
import { EcommerceContext } from "../context/EcommerceContext";
import { findStringArrayIndex } from "../helpers/encontrarArreglo";

interface GenderProps {
  gender: string;
}
export const Gender: FC<GenderProps> = ({ gender }) => {
  const { data: arrProductos, isLoading } = useQuery<IProducto[] | undefined>(
    ["getProductsByGender", gender],
    getProductsByGender(gender)
  );
  const [imgs, setImgs] = useState<string[][] | undefined>(undefined);
  useEffect(() => {
    if (arrProductos) {
      let arrImgs = [];
      for (const producto of arrProductos) {
        arrImgs.push(producto.imgs);
      }
      setImgs(arrImgs);
    }
  }, [arrProductos]);
  const { showCard, showDSKG, setProductPos, setShowDSKG } =
    useContext(EcommerceContext);
  if (isLoading) {
    return <div>...loading</div>;
  }
  return (
    <div className="gender-container">
      {arrProductos?.map((producto) => (
        <div key={producto.nombre} className="producto">
          <h3>{producto.nombre}</h3>
          <img
            src={producto.imgs[0]}
            alt={producto.nombre}
            onClick={() => {
              if (imgs) {
                setProductPos(findStringArrayIndex(imgs, producto.imgs));
                setShowDSKG(true);
              }
            }}
          />
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
      {showCard && <Buycard />}
      {showDSKG && <GalleryDskActive imgs={imgs} isLoading={isLoading} />}
    </div>
  );
};
