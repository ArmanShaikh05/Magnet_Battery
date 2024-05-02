import { useContext } from "react";
import { SidebarContext } from "./sidebar";
import { GlobalDataContext } from "./globalData";

export const useSidebarContextHook = () => {
    return useContext(SidebarContext);
}

export const useGlobalContextHook = () =>{
    return useContext(GlobalDataContext)
}