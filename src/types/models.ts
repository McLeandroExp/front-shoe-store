interface IUsuario {
  nombre: string;
  correo: string;
  password: string;
  img?: string;
  rol: string;
  estado: boolean;
  google: boolean;
}

interface ICategoria {
  nombre: string;
  estado?: boolean;
  usuario: String | IUsuario;
}

interface IProducto {
  nombre: string;
  estado: boolean;
  usuario: string;
  precio: number;
  categoria: {
    nombre: string;
    _id: string;
  };
  descripcion: string;
  imgs: string[];
  disponible: boolean;
  descuento: number;
  sexo: string;
  nombre_empresa: string;
}
export type { IUsuario, ICategoria, IProducto };
