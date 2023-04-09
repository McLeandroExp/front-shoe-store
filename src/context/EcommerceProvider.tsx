import { useState } from "react";
import { EcommerceContext } from "./EcommerceContext";

interface props {
  children: JSX.Element | JSX.Element[];
}
export const EcommerceProvider = ({ children }: props) => {
  const [nProducts, setNProducts] = useState(0);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  return (
    <EcommerceContext.Provider
      value={{
        nProducts,
        setNProducts,
        activeMenu,
        setActiveMenu,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};
