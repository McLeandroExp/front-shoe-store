import { useQuery } from "react-query";
import { getCollectionsWithProducts } from "../helpers/queries";
import { CategoriasConUsuarios } from "../types/req_res";
import { AddProductButton, Buycard, GalleryDskActive } from "../components";
import { useContext, useEffect, useRef, useState } from "react";
import { EcommerceContext } from "../context/EcommerceContext";
import { findStringArrayIndex } from "../helpers/encontrarArreglo";
import { QuantityController } from "../components/commerceInfo/QuantityController";

export const Collections = () => {
  const {
    setProductPos,
    setShowDSKG,
    showCard,
    showDSKG,
    nProducts,
    setNProducts,
  } = useContext(EcommerceContext);

  const { data: arrCategoriasConProductos, isLoading } = useQuery<
    CategoriasConUsuarios[] | undefined
  >(["getCollectionsWithProducts"], getCollectionsWithProducts);
  const [imgs, setImgs] = useState<string[][] | undefined>(undefined);
  const [nProds, setNProds] = useState<number[]>([]);
  useEffect(() => {
    if (arrCategoriasConProductos) {
      let arrImgs = [];
      for (const categoria of arrCategoriasConProductos) {
        for (const producto of categoria.productos) {
          arrImgs.push(producto.imgs);
        }
      }
      setImgs(arrImgs);
    }
  }, [arrCategoriasConProductos]);

  useEffect(() => {
    if (imgs) {
      setNProds(Array(imgs.length).fill(0));
    }
  }, []);

  if (isLoading || !arrCategoriasConProductos) {
    return <div>Loading...</div>;
  }

  return (
    <div className="collections_container">
      {arrCategoriasConProductos.map((categoria, i) => {
        return (
          <div key={categoria._id} className="categoria">
            <h2 className="categoria_nombre">{categoria.nombre}</h2>
            <div className="productos">
              {categoria.productos.map((producto, j) => {
                return (
                  <div key={producto._id} className="producto">
                    <h3>{producto.nombre}</h3>
                    <img
                      src={producto.imgs[0]}
                      alt={producto.nombre}
                      onClick={() => {
                        if (imgs) {
                          setProductPos(
                            findStringArrayIndex(imgs, producto.imgs)
                          );
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
                    {/* <QuantityController id={producto._id} /> */}
                    <AddProductButton idProduct={producto._id} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {showCard && <Buycard />}
      {showDSKG && <GalleryDskActive imgs={imgs} isLoading={isLoading} />}
    </div>
  );
};
