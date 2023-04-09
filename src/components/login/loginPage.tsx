import { enviarDatos } from "../../helpers/autenticacion";
import { UsuarioLogin } from "../../types/req_res";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function LoginPage() {
  const { formulario, handleChange, reset } = useForm({
    login_correo: "",
    login_password: "",
  });
  const { login_correo, login_password } = formulario;

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
        console.log(usuario, token);
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

  const handleAppRegistration = () => {
    // Handle app registration logic here
  };

  const handleGoogleRegistration = () => {
    // Handle Google registration logic here
  };

  return (
    <section className="login-form-container">
      <figure className="login-form-image-container">
        <img
          className="login-form-image"
          src="./assets/images/logo.svg"
          alt="Your Image"
        />
      </figure>
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
