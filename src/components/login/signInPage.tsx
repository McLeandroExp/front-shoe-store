import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { enviarDatosSignIn } from "../../helpers/autenticacion";
import Swal from "sweetalert2";
import { useContext } from "react";
import { EcommerceContext } from "../../context/EcommerceContext";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const { formulario, handleChange, reset } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { firstName, lastName, email, password, confirmPassword } = formulario;

  const { setUserToken } = useContext(EcommerceContext);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const totalName = firstName + " " + lastName;
    if (password !== confirmPassword) {
      reset();
      return Swal.fire({
        title: "Error",
        text: `Las contraseñas no coinciden`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
    const userResp = await enviarDatosSignIn({
      nombre: totalName,
      correo: email,
      password,
    });

    if (!userResp) {
      return Swal.fire({
        title: "Error",
        text: `Hubo un error en la creacion de usuario`,
        icon: "error",
        confirmButtonText: "OK",
      });
    } else {
      if (userResp.body) {
        const { usuario } = userResp.body;
        const { token } = userResp.body;
        setUserToken({ user: usuario, token: token });
        navigate("/");
      }
      if (userResp.errors) {
        const errorText = userResp.errors.map((err) => err.msg).join(", ");
        return Swal.fire({
          title: "Error",
          text: `${errorText}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <section className="registration-form">
      <h2 className="form-title">Regístrate</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">
            Repetir contraseña
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-button">
          Regístrate
        </button>
      </form>
    </section>
  );
}

export default RegistrationForm;
