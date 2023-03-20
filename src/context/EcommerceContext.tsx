import { createContext } from "react";
export type EcommerceContextProps = {
    nProducts : number,
    setNProducts : React.Dispatch<React.SetStateAction<number>>,
    activeMenu : boolean,
    setActiveMenu : React.Dispatch<React.SetStateAction<boolean>>
}
export const EcommerceContext = createContext<EcommerceContextProps>({} as EcommerceContextProps)



