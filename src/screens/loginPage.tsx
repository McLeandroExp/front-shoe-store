import { enviarDatos } from "../helpers/autenticacion";
import { UsuarioLogin } from "../types/req_res";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext, useEffect } from "react";
import { EcommerceContext } from "../context/EcommerceContext";
import { gapi } from "gapi-script";
import { LoginGoogleBtn } from "../components/login/LoginGoogleBtn";

function LoginPage() {
  const { formulario, handleChange, reset } = useForm({
    login_correo: "",
    login_password: "",
  });
  const { login_correo, login_password } = formulario;

  const { setUserToken } = useContext(EcommerceContext);

  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user: UsuarioLogin = {
      correo: login_correo,
      password: login_password,
    };
    const resp = await enviarDatos(user);
    if (resp) {
      const { ok, msg } = resp;
      if (ok) {
        const { usuario, token } = resp;
        if (usuario && token) {
          setUserToken({ user: usuario, token: token });
          navigate("/");
        }
      } else {
        Swal.fire({
          title: "Error",
          text: `${msg}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else {
      console.log("Hubo un error");
    }
    reset();
  };
  const clientId =
    "455500008473-8rad3d1ogi4f18dv5h5au57v91qj9nrh.apps.googleusercontent.com";
  useEffect(() => {
    function start() {
      // gapi.auth2.getAuthInstance({
      //   clientId,
      //   scope: "",
      // });
      gapi.client.init({
        clientId,
        scope: "",
      });
      // gapi.auth.init({clientId : clientId});
    }
    gapi.load("client", start);
  }, []);

  const handleAppRegistration = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // Handle app registration logic here
    event.preventDefault();
    navigate("/sign");
  };

  return (
    <section className="login-form-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="login-form-field">
          <label className="login-form-label">Correo electrónico</label>
          <input
            className="login-form-input"
            type="email"
            name="login_correo"
            value={login_correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="login-form-field">
          <label className="login-form-label">Contraseña</label>
          <input
            className="login-form-input"
            name="login_password"
            type="password"
            value={login_password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="login-form-button" type="submit">
          Iniciar sesión
        </button>
        <button
          className="login-form-button"
          type="button"
          onClick={handleAppRegistration}
        >
          Registrate
        </button>
        <LoginGoogleBtn />
        {/* <div className="login-form-button" onClick={handleGoogleRegistration}> */}

        {/* </div> */}
      </form>
    </section>
  );
}

export default LoginPage;
