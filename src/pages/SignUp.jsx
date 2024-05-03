import { useNavigate } from "react-router-dom";
import { useAuth, useSidebarContextHook } from "../context/contextHooks";
import { useState } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const { setShowSidebar } = useSidebarContextHook();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();


  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (password.length < 8) {
      toast.error("Password must be more than 8 letters");
      setLoading(false);
      return;
    }


    toast
      .promise(signup(email, password), {
        loading: "Signing up",
        success: () => {
          navigate("/");
          setLoading(false);
          return <b>Signed up successfully</b>;
        },
        error: (err) => {
          setLoading(false);
          console.log(err.message) ;
          return <b>Account already existst</b>
        },
      })
      .then((user) => {
        updateProfile(user.user, {
          displayName: username,
        });      
      });
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="login-container">
        <form>
          <h1 className="underlined-text">Register with us</h1>
          <div className="form-row">
            <h1>Username</h1>
            <input
              type="text"
              placeholder="Enter username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-row">
            <h1>Email</h1>
            <input
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-row">
            <h1>Password</h1>
            <input
              type="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="btn-Container">
            <button
              className="ghost-btn signup-ghost-btn"
              onClick={(e) => {
                e.preventDefault();
                setShowSidebar(false);
                navigate("/login");
              }}
            >
              Already Have Account
            </button>
            <button
              className="btn"
              disabled={loading}
              onClick={(e) => handleSignUpSubmit(e)}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
