import { useContext } from "react";
import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { EcommerceContext } from "../../context/EcommerceContext";
export const LoginGoogleBtn = () => {
  const navigate = useNavigate();

  const clientId =
    "455500008473-8rad3d1ogi4f18dv5h5au57v91qj9nrh.apps.googleusercontent.com";
  const { setUserToken } = useContext(EcommerceContext);

  const onSuccessGLogin = (res: any) => {
    const body = { id_token: res.tokenId };

    fetch("http://localhost:8000/api/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        localStorage.setItem(
          "userToken",
          JSON.stringify({ user: resp.usuario, token: resp.token })
        );
        setUserToken({ user: resp.usuario, token: resp.token });
      })
      .catch(console.warn);
    navigate("/");
  };
  const onFailureGLogin = (res: any) => {
    console.log("LoginFailed user: ", res.profileObj);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccessGLogin}
        onFailure={onFailureGLogin}
        buttonText="Inicia sesion con google"
        cookiePolicy={"single_host_origin"}
        className="google_login_btn"
        // isSignedIn={true}
      />
    </div>
  );
};
