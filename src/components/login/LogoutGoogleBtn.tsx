import { FC, useContext } from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { EcommerceContext } from "../../context/EcommerceContext";

interface LogoutGoogleBtnProps {
  setShowLogout: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LogoutGoogleBtn: FC<LogoutGoogleBtnProps> = ({
  setShowLogout,
}) => {
  const navigate = useNavigate();
  const { setUserToken, userToken } = useContext(EcommerceContext);
  const clientId =
    "455500008473-8rad3d1ogi4f18dv5h5au57v91qj9nrh.apps.googleusercontent.com";

  const logoutSuccess = () => {
    setUserToken(null);
    setShowLogout(false);
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
