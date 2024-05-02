import { createContext, useState } from "react";

export const GlobalDataContext = createContext()

/* eslint-disable react/prop-types */
export const GlobalDataContextProvider = ({children}) => {
    const [brand, setBrand] = useState("");
    const [search, setSearch] = useState("");
    const [path, setPath] = useState(window.location.pathname.split("/")[2]);

    return (
        <GlobalDataContext.Provider value={{brand, setBrand, search, setSearch,path,setPath}}>
            {children}
        </GlobalDataContext.Provider>
    )
}
