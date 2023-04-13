import { useState } from "react";
import { EcommerceContext } from "./EcommerceContext";
import { IUsuario } from "../types/models";

interface props {
  children: JSX.Element | JSX.Element[];
}
export const EcommerceProvider = ({ children }: props) => {
  const [nProducts, setNProducts] = useState(0);
  const [activeMenu, setActiveMenu] = useState(true);
  const [userToken, setUserToken] = useState<{
    user: IUsuario;
    token: string;
  } | null>(null);
  return (
    <EcommerceContext.Provider
      value={{
        nProducts,
        setNProducts,
        activeMenu,
        setActiveMenu,
        userToken,
        setUserToken,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};
