import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth, useSidebarContextHook } from "../context/contextHooks";
import { useState } from "react";
import toast from "react-hot-toast";

const LogIn = () => {

    const navigate = useNavigate()
    const {setShowSidebar} = useSidebarContextHook()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();

    const handleLogInSubmit = (e) => {
        e.preventDefault()
        setLoading(true);
    if (password.length < 8) {
      toast.error("Password must be more than 8 letters");
      setLoading(false);
      return;
    }

    toast
      .promise(login(email, password), {
        loading: "Logging In",
        success: () => {
          navigate("/");
          setLoading(false);
          return <b>Loged In successfully</b>;
        },
        error: () => {
          setLoading(false);
          return <b>Invalid Credentials</b>;
        },
      })
    }

  return (
    <div className="container">
      <div className="login-container">
        <form>
          <h1 className="underlined-text">Welcome Back</h1>
          <div className="form-row">
            <h1>Email</h1>
            <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div className="form-row">
            <h1>Password</h1>
            <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <Link to={"/resetpassword"}>Forgot Password</Link>
          <div className="btn-Container">
            <button className="ghost-btn" onClick={(e)=>{e.preventDefault();setShowSidebar(false);navigate("/signup")}}>New Register</button>
            <button className="btn" disabled={loading} onClick={(e)=>handleLogInSubmit(e)}>Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
