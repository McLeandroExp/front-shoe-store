import { useContext } from "react";
import { useScreenWidthHeight } from "../../hooks/useScreenWidthHeight";
import { EcommerceContext } from "../../context/EcommerceContext";
type HeaderProps = {
  showCard: boolean;
};

export const Header = ({ showCard }: HeaderProps) => {
  const minWidth = 780;
  const { screenWidth } = useScreenWidthHeight();
  const { nProducts } = useContext(EcommerceContext);
  return (
    <header className="header">
      <article className="menu-logo_container">
        <div className="logo_container">
          <img src="/assets/images/logo.svg" alt="logo" />
        </div>
        <div
          className={`horizontal_menu ${screenWidth < minWidth ? "dis" : ""}`}
        >
          <ul className={`hor_menu`}>
            <li className="hor_menu_item">Collections</li>
            <li className="hor_menu_item">Men</li>
            <li className="hor_menu_item">Women</li>
            <li className="hor_menu_item">About</li>
            <li className="hor_menu_item">Contact</li>
          </ul>
        </div>
      </article>
      <div className="article_rigth_items">
        <div className="lcontainer">
          <img src="/assets/images/icon-cart.svg" alt="carritoUwU" />
          {showCard && <div className="nlcarticles">{nProducts}</div>}
        </div>
        <img src="/assets/images/image-avatar.png" alt="person" />
      </div>
    </header>
  );
};
