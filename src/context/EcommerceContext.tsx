import { createContext } from "react";
import { IUsuario } from "../types/models";
export type EcommerceContextProps = {
  nProducts: number;
  setNProducts: React.Dispatch<React.SetStateAction<number>>;
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  userToken: { user: IUsuario; token: string } | null;
  setUserToken: React.Dispatch<
    React.SetStateAction<{ user: IUsuario; token: string } | null>
  >;
};
export const EcommerceContext = createContext<EcommerceContextProps>(
  {} as EcommerceContextProps
);
