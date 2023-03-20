// import { useScreenWidth } from "../hooks/useScreenWidth";
import { EcommerceContext } from "../../context/EcommerceContext";
import { useContext} from "react";
import 'animate.css';

export const Menu = () => {
  const { activeMenu , setActiveMenu} = useContext(EcommerceContext);

  return (
    <aside className={`menu ${activeMenu ? "disabled" : ""} animate__animated animate__fadeInLeft animate__faster`}>
      <div className="clickable-space ">
        <ul className="menu__container ">
          <li className="menu__item">collections</li>
          <li className="menu__item">men</li>
          <li className="menu__item">women</li>
          <li className="menu__item">about</li>
          <li className="menu__item">contact</li>
        </ul>
      </div>
      <div className="transparent-space" onClick={()=>setActiveMenu(true)}></div>
    </aside>
  );
};
