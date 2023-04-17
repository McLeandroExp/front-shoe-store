import { IProducto } from "../types/models";

import { CategoriasConUsuarios } from "../types/req_res";

const url = process.env.REACT_APP_URL;
const getProducts = async (): Promise<IProducto[] | undefined> => {
  try {
    const resp = await fetch(`${url}/api/productos`);
    const { productos } = await resp.json();
    return productos;
  } catch (error) {
    return undefined;
  }
};
const getProductsByGender = (gender: string) => {
  return async (): Promise<IProducto[] | undefined> => {
    try {
      const resp = await fetch(`${url}/api/productos/sex/${gender}`);
      const arrProductos = await resp.json();
      return arrProductos;
    } catch (error) {
      return undefined;
    }
  };
};

const getCollectionsWithProducts = async (): Promise<
  CategoriasConUsuarios[] | undefined
> => {
  try {
    const resp = await fetch(`${url}/api/productos/categorias`);
    const arrCollectionswithProducts = await resp.json();
    return arrCollectionswithProducts;
  } catch (error) {
    return undefined;
  }
};

export { getProducts, getCollectionsWithProducts, getProductsByGender };
