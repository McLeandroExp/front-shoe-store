import { enviarDatos } from "../helpers/autenticacion";
import { UsuarioLogin } from "../types/req_res";
import { useForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { EcommerceContext } from "../context/EcommerceContext";

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
        setUserToken({ user: usuario!, token: token! });
        navigate("/");
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

  const handleAppRegistration = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // Handle app registration logic here
    event.preventDefault();
    navigate("/sign");
  };

  const handleGoogleRegistration = () => {
    // Handle Google registration logic here
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
        <button
          className="login-form-button"
          type="button"
          onClick={handleGoogleRegistration}
        >
          Registrarse con Google
        </button>
      </form>
    </section>
  );
}

export default LoginPage;
