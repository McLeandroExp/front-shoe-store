import { useContext, useEffect, useState } from "react";
import { useScreenWidthHeight } from "../../hooks/useScreenWidthHeight";
import { EcommerceContext } from "../../context/EcommerceContext";
import { NavLink, useNavigate } from "react-router-dom";
import { LogoutGoogleBtn } from "../login/LogoutGoogleBtn";
type HeaderProps = {
  showCard: boolean;
};

export const Header = ({ showCard }: HeaderProps) => {
  const minWidth = 780;
  const { screenWidth } = useScreenWidthHeight();
  const { nProducts, userToken } = useContext(EcommerceContext);
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);
  const handleShowLogout = () => {
    setShowLogout((lb) => !lb);
  };

  return (
    <header className="header">
      <section className="menu-logo_container">
        <figure className="logo_container">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            onClick={() => navigate("/")}
            role="link"
          />
        </figure>
        <div
          className={`horizontal_menu ${screenWidth < minWidth ? "dis" : ""}`}
        >
          <ul className={`hor_menu`}>
            <li className="hor_menu_item">
              <NavLink to="/collections" className="hor_menu_link">
                Collections
              </NavLink>
            </li>
            <li className="hor_menu_item">
              <NavLink to="/men" className="hor_menu_link">
                Men
              </NavLink>
            </li>
            <li className="hor_menu_item">
              <NavLink to="/women" className="hor_menu_link">
                Women
              </NavLink>
            </li>
            <li className="hor_menu_item">
              <NavLink to="/about" className="hor_menu_link">
                About
              </NavLink>
            </li>
            <li className="hor_menu_item">
              <NavLink to="/contact" className="hor_menu_link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <div className="article_rigth_items">
        {!userToken ? (
          <div
            className="login_button_container"
            onClick={() => navigate("/login")}
            role="link"
          >
            <p className="login_button">Login</p>
          </div>
        ) : (
          <section className="loged_user_elements">
            {/* <div className="lcontainer">
              <img src={"/assets/images/icon-cart.svg"} alt="carritoUwU" />
              {showCard && <div className="nlcarticles">{nProducts}</div>}
            </div> */}
            <p className="usr_name">{userToken ? userToken.user.nombre : ""}</p>
            <img
              src={
                userToken
                  ? userToken.user.img
                    ? userToken.user.img
                    : "./assets/images/image-avatar.png"
                  : "./assets/images/image-avatar.png"
              }
              alt="person"
              className="usr_img"
            />
            {/* <span className="arrowImg">&rarr;</span> */}
            <img
              src="./assets/images/icon-next.svg"
              alt="arrow"
              className="arrowImg"
              onClick={handleShowLogout}
            />
            {showLogout && <LogoutGoogleBtn />}
            {/* <LogoutGoogleBtn /> */}
          </section>
        )}
      </div>
    </header>
  );
};
