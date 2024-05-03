import { Navigate, Outlet } from "react-router-dom"


/* eslint-disable react/prop-types */
const ProtectedRoute = ({children,isAuthenticated}) => {
  
    if(!isAuthenticated) return <Navigate to={"/"} />

    return children ? children : <Outlet />
}

export default ProtectedRoute