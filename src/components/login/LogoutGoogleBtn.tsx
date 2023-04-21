import { useContext } from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { EcommerceContext } from "../../context/EcommerceContext";
export const LogoutGoogleBtn = () => {
  const navigate = useNavigate();
  const { setUserToken, userToken } = useContext(EcommerceContext);
  const clientId =
    "455500008473-8rad3d1ogi4f18dv5h5au57v91qj9nrh.apps.googleusercontent.com";

  const logoutSuccess = () => {
    setUserToken(null);
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
      {userToken && userToken.user.google ? (
        <GoogleLogout
          className="google_logout_btn"
          clientId={clientId}
          onLogoutSuccess={logoutSuccess}
          buttonText="Logout"
        />
      ) : (
        <div className="logout_btn" onClick={logoutSuccess}>
          <p>Logout</p>
        </div>
      )}
    </div>
  );
};
