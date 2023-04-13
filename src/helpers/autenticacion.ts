import { IUsuario } from "../types/models";
import {
  UsuarioLogin,
  UsuarioLoginResp,
  UsuarioRegister,
  UsuarioRegisterResp,
} from "../types/req_res";

const enviarDatos = async (
  data: UsuarioLogin
): Promise<UsuarioLoginResp | null> => {
  try {
    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resp: UsuarioLoginResp = await response.json();
    return resp;
  } catch (error) {
    console.error(error, "entro al catch de enviarDatos");
    return null;
  }
};
const enviarDatosSignIn = async (
  data: UsuarioRegister
): Promise<UsuarioRegisterResp | null> => {
  try {
    const response = await fetch("http://localhost:8000/api/auth/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resp: UsuarioRegisterResp = await response.json();
    return resp;
  } catch (error) {
    console.error(error, "entro al catch de enviarDatosSignIn");
    return null;
  }
};
export { enviarDatos, enviarDatosSignIn };
