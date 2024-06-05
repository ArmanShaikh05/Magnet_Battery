import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import {
  useAuth,
  useGlobalContextHook,
  useSidebarContextHook,
} from "../context/contextHooks";
import LogoutOverlay from "./LogoutOverlay";

const Navbar = () => {
  const [showBg, setShowBg] = useState(false);
  const TOP_OFFSET = 50;
  const navigate = useNavigate();
  const { showSidebar, setShowSidebar } = useSidebarContextHook();
  const { setPath } = useGlobalContextHook();
  const [showOverlay, setShowOverlay] = useState(false);

  const { currentUser } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBg(true);
      } else {
        setShowBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const unCheckRadioBtns = () => {
    let allRadioBtns = document.querySelectorAll(".radio-btns");
    allRadioBtns.forEach((value) => (value.checked = false));
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    setShowSidebar(false);
    navigate("/store/");
    setPath("");
    window.scrollTo(0, 0);
  };

  const handleManageStoreNavigate = (e) => {
    e.preventDefault();
    setShowSidebar(false);
    navigate("/manage-store/");
    setPath("");
    window.scrollTo(0, 0);
    unCheckRadioBtns();
  };

  const handleLogInNavigate = (e) => {
    e.preventDefault();
    setShowSidebar(false);
    navigate("/login");
    window.scrollTo(0, 0);
    unCheckRadioBtns();
  };

  const handleLogOut = (e) =>{
    e.preventDefault()
    window.scrollTo(0,0)
    setShowOverlay(true)
    setShowSidebar(false)
  }

  const handleShowSidebarEvent = (e) => {
    e.preventDefault();
    setShowSidebar(true);
  };
  const handleHideSidebarEvent = (e) => {
    e.preventDefault();
    setShowSidebar(false);
  };

  return (
    <>
    <LogoutOverlay open={showOverlay}
    setOpen={setShowOverlay}
    name={currentUser?.displayName}
   />
    <div
      className={`navbar-container ${showBg ? "navWithBg" : "navWithoutBg"}`}
    >
      <nav className={`navbar container `}>
        <Link
          to={"/"}
          onClick={() => {
            window.scrollTo(0, 0);
            setShowSidebar(false);
          }}
        >
          <img src={logo} alt="Logo" />
        </Link>

        <div className="navlinks">
          <Link to="/">Home</Link>
          <Link to={"/contact"}>Contact Us</Link>
          <Link to={"/find-battery"}>Find Battery</Link>
          { currentUser?.uid === import.meta.env.VITE_ADMIN_UID?<Link onClick={(e)=>handleManageStoreNavigate(e)} >Manage Store</Link>:null}
          <button className="btn" onClick={(e) => handleNavigate(e)}>
            Our Store
          </button>

          {currentUser?.uid ? (
            <button
            className="ghost-btn"
            onClick={(e) => handleLogOut(e)}
          >
            Log Out
          </button>
          ) : (
            <button
              className="ghost-btn"
              onClick={(e) => handleLogInNavigate(e)}
            >
              Log In
            </button>
          )}
        </div>

        <svg
          onClick={(e) => handleShowSidebarEvent(e)}
          className="hamburger-menu"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>

        <div className={`sidebar ${showSidebar ? "" : "inactive"}`}>
          <svg
            onClick={(e) => handleHideSidebarEvent(e)}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
          <div className="sidebar-links">
            <Link onClick={() => setShowSidebar(false)} to="/">
              Home
            </Link>
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
                setShowSidebar(false);
              }}
              to={"/contact"}
            >
              Contact Us
            </Link>
            <Link
              onClick={() => {
                window.scrollTo(0, 0);
                setShowSidebar(false);
              }}
              to={"/find-battery"}
            >
              Find Battery
            </Link>
            {currentUser?.uid === import.meta.env.VITE_ADMIN_UID?<Link onClick={(e)=>handleManageStoreNavigate(e)} to={"/manage-store"}>Manage Store</Link>:null}
            <button className="btn" onClick={(e) => handleNavigate(e)}>
              Our Store
            </button>
            {currentUser?.uid ? (
              <button
              className="btn"
              onClick={(e) => handleLogOut(e)}
            >
              Log Out
            </button>
            ) : (
              <button
                className="btn"
                onClick={(e) => handleLogInNavigate(e)}
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
