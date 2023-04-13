// import { useScreenWidth } from "../hooks/useScreenWidth";
import { EcommerceContext } from "../../context/EcommerceContext";
import { useContext } from "react";
import "animate.css";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  const { activeMenu, setActiveMenu } = useContext(EcommerceContext);
  const closeMenu = () => {
    setActiveMenu(true);
    console.log("se dio click al link");
  };
  return (
    <aside
      className={`menu ${
        activeMenu ? "disabled" : ""
      } animate__animated animate__fadeInLeft animate__faster`}
    >
      <div className="clickable-space ">
        <ul className="menu__container ">
          <li className="menu__item">
            <NavLink
              to="/collections"
              className="menu__link"
              onClick={closeMenu}
            >
              collections
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/men" className="menu__link" onClick={closeMenu}>
              men
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/women" className="menu__link" onClick={closeMenu}>
              women
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/about" className="menu__link" onClick={closeMenu}>
              about
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/contact" className="menu__link" onClick={closeMenu}>
              contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className="transparent-space"
        onClick={() => setActiveMenu(true)}
      ></div>
    </aside>
  );
};
