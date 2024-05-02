import { createContext, useState } from "react";

export const SidebarContext = createContext()

/* eslint-disable react/prop-types */
export const SidebarContextProvider = ({children}) => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <SidebarContext.Provider value={{showSidebar, setShowSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
}
