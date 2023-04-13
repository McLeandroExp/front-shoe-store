import { IProducto } from "../types/models";

const getProducts = async (): Promise<IProducto[] | undefined> => {
  try {
    const resp = await fetch("http://localhost:8000/api/productos");
    const { productos } = await resp.json();
    return productos;
  } catch (error) {
    return undefined;
  }
};

export { getProducts };
