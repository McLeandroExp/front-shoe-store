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
  usuario: String | IUsuario;
  precio: number;
  categoria: String | ICategoria;
  descripcion?: string;
  imgs: string[];
  disponible: boolean;
}
export type { IUsuario, ICategoria, IProducto };
