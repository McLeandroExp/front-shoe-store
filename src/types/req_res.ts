import { IUsuario } from "./models";

type UsuarioLogin = {
  correo: string;
  password: string;
};
type UsuarioLoginResp = {
  ok: boolean;
  usuario: IUsuario | null;
  token: string | null;
  msg: string;
};
type UsuarioRegister = {
  nombre: string;
  correo: string;
  password: string;
};
type errorObj = {
  value?: string;
  msg: string;
  param: string;
  location: string;
};
type UsuarioRegisterResp = {
  ok: boolean;
  msg: string;
  body: { usuario: IUsuario; token: string } | null;
  errors: errorObj[] | null;
};

export type {
  UsuarioLogin,
  UsuarioLoginResp,
  UsuarioRegister,
  UsuarioRegisterResp,
};
