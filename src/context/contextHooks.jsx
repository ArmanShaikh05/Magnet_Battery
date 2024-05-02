import { useContext } from "react";
import { SidebarContext } from "./sidebar";

export const useSidebarContextHook = () => {
    return useContext(SidebarContext);
}