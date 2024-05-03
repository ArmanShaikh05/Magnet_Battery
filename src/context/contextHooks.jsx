import { useContext } from "react";
import { SidebarContext } from "./sidebar";
import { GlobalDataContext } from "./globalData";
import { AuthContext } from "./authContext";

export const useSidebarContextHook = () => {
    return useContext(SidebarContext);
}

export const useGlobalContextHook = () =>{
    return useContext(GlobalDataContext)
}

export const useAuth = () => {
    return useContext(AuthContext);
  };