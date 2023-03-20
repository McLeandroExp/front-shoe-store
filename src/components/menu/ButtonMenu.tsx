import { useContext } from "react";
import { EcommerceContext } from "../../context/EcommerceContext";

export const ButtonMenu = () => {
  const {activeMenu,setActiveMenu} = useContext(EcommerceContext)
  return (
    <button
      aria-label="open or close menu"
      className={`hamburger hamburger--collapse ${activeMenu ? '':'is-active'} hamb-button`}
      type="button"
      onClick={()=>setActiveMenu((active)=>!active)}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};
