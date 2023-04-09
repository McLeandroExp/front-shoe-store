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
export type { UsuarioLogin, UsuarioLoginResp };
