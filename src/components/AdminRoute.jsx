import { Navigate, Outlet } from "react-router-dom"


/* eslint-disable react/prop-types */
const AdminRoute = ({children,isAuthenticated,isAdmin}) => {
  
    if(!isAuthenticated || !isAdmin) return <Navigate to={"/"} />

    return children ? children : <Outlet />
}

export default AdminRoute