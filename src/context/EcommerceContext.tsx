import { createContext } from "react";
import { IUsuario, ProdAdded, ProductsSold } from "../types/models";
export type EcommerceContextProps = {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  userToken: { user: IUsuario; token: string } | null;
  setUserToken: React.Dispatch<
    React.SetStateAction<{ user: IUsuario; token: string } | null>
  >;
  showCard: boolean;
  setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
  showDSKG: boolean;
  setShowDSKG: React.Dispatch<React.SetStateAction<boolean>>;
  productPos: number;
  setProductPos: React.Dispatch<React.SetStateAction<number>>;
  arrProducts: ProdAdded[];
  setArrProducts: React.Dispatch<React.SetStateAction<ProdAdded[]>>;
};
export const EcommerceContext = createContext<EcommerceContextProps>(
  {} as EcommerceContextProps
);
