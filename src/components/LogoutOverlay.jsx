import toast from "react-hot-toast";
import { useAuth } from "../context/contextHooks";
import { useNavigate } from "react-router-dom";
// import axios from "axios";

/* eslint-disable react/prop-types */
const LogoutOverlay = ({ open, setOpen, name }) => {

    const {logout} = useAuth()
    const navigate = useNavigate()

  const handlelogout = async () => {
    toast.promise(
        logout(),
      {
        loading: "Logging Out",
        success: <b>Logged Out</b>,
        error: <b>Logout Failed</b>,
      }
    );
    navigate("/")
    setOpen(false);
  };

  if (open) {
    return (
      <div className="overlay-container">
        <div className="overlay-box">
          <div className="overlay-data">
            <h2>Hey {name}!</h2>
            <h4>Are you sure you want to logout?</h4>
          </div>
          <div className="overlay-buttons">
            <button
              className="cancelBtn btn"
              type="button"
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </button>
            <button
              className="deleteBtn btn"
              type="submit"
              onClick={handlelogout}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default LogoutOverlay;
