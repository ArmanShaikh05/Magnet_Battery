import { useNavigate } from "react-router-dom";
import { useAuth, useSidebarContextHook } from "../context/contextHooks";
import { useState } from "react";
import toast from "react-hot-toast";

const ResetPassword = () => {

    const navigate = useNavigate()
    const {setShowSidebar} = useSidebarContextHook()
    const [email,setEmail] = useState("")
    const {resetPassword} = useAuth()
    const [loading, setLoading] = useState(false);

    const handleResetPassword = (e) => {
        e.preventDefault()
        setLoading(true);
        toast.promise(resetPassword(email),{
          loading: "Sending reset email link",
          success: <b>Password reset link sent to your email</b>,
          error: <b>Error sending password reset link</b>
        })
        setLoading(false)
    }
  return (
    <div className="container">
      <div className="login-container">
        <form>
          <h1 className="underlined-text">Reset Password</h1>
          <div className="form-row">
            <h1>Email</h1>
            <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          
          <div className="btn-Container">
            <button className="ghost-btn" onClick={(e)=>{e.preventDefault();setShowSidebar(false);navigate("/login")}}>Log In</button>
            <button className="btn" disabled={loading} onClick={(e)=>handleResetPassword(e)}>Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
