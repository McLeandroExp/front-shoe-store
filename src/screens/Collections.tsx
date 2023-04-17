import { useQuery } from "react-query";
import { getCollectionsWithProducts } from "../helpers/queries";
import { CategoriasConUsuarios } from "../types/req_res";
import { AddProductButton, Buycard, GalleryDskActive } from "../components";
import { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceContext";

export const Collections = () => {
  const { setProductPos, setShowDSKG, showCard, showDSKG } =
    useContext(EcommerceContext);
  const { data: arrCategoriasConProductos, isLoading } = useQuery<
    CategoriasConUsuarios[] | undefined
  >(["getCollectionsWithProducts"], getCollectionsWithProducts);

  if (isLoading || !arrCategoriasConProductos) {
    return <div>Loading...</div>;
  }

  return (
    <div className="collections_container">
      {arrCategoriasConProductos.map((categoria) => (
        <div key={categoria._id} className="categoria">
          <h2 className="categoria_nombre">{categoria.nombre}</h2>
          <div className="productos">
            {categoria.productos.map((producto, i) => (
              <div key={producto._id} className="producto">
                <h3>{producto.nombre}</h3>
                <img
                  src={producto.imgs[0]}
                  alt={producto.nombre}
                  onClick={() => {
                    setProductPos(i);
                    setShowDSKG(true);
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
          </div>
        </div>
      ))}

      {showCard && <Buycard />}
      {showDSKG && <GalleryDskActive />}
    </div>
  );
};
