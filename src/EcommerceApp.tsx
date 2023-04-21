import { Header } from "./components/Header/Header";

import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ButtonMenu } from "./components/menu/ButtonMenu";
import { Menu } from "./components/menu/Menu";
import { useScreenWidthHeight } from "./hooks/useScreenWidthHeight";

export default function EcommerceApp() {
  const minScreenWidth = 780;
  const [showCard, setShowCard] = useState<boolean>(false);
  const { screenWidth } = useScreenWidthHeight();
  // useQuery(["getProducts"], getProducts);

  return (
    <div className="E-commerceApp">
      <Header showCard={showCard} />
      {screenWidth < minScreenWidth && <ButtonMenu />}
      {screenWidth < minScreenWidth && <Menu />}
      <Outlet />
    </div>
  );
}
