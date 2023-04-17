import { useState } from "react";
import { EcommerceContext } from "./EcommerceContext";
import { IUsuario } from "../types/models";

interface props {
  children: JSX.Element | JSX.Element[];
}
export const EcommerceProvider = ({ children }: props) => {
  const [productPos, setProductPos] = useState(0);
  const [nProducts, setNProducts] = useState(0);

  const [activeMenu, setActiveMenu] = useState(true);
  const [userToken, setUserToken] = useState<{
    user: IUsuario;
    token: string;
  } | null>(null);
  const [showCard, setShowCard] = useState<boolean>(false);
  const [showDSKG, setShowDSKG] = useState<boolean>(false);

  return (
    <EcommerceContext.Provider
      value={{
        nProducts,
        setNProducts,
        activeMenu,
        setActiveMenu,
        userToken,
        setUserToken,
        showCard,
        setShowCard,
        showDSKG,
        setShowDSKG,
        productPos,
        setProductPos,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};
