import { useNavigate } from "react-router-dom";
import HeroRightImage from "../../assets/heroRightImg.png";
import { useSidebarContextHook } from "../../context/contextHooks";

const HeroSection = () => {

  const navigate = useNavigate(); 
  const {setShowSidebar} = useSidebarContextHook()

  const handleContactClick = (e) => {
    e.preventDefault
    setShowSidebar(false)
    navigate("/contact")
  }
  const handleStoreClick = (e) => {
    e.preventDefault
    setShowSidebar(false)
    navigate("/store")
  }

  return (
    <div className="hero container">
      <div className="hero-data">
        <div className="hero-text">
          <h1>A ONE STOP SOLUTION For all your battery need</h1>
          <p>Powering your life, on the road and at home since 2007.</p>
        </div>
        <div className="hero-btns">
          <button onClick={(e)=>{window.scrollTo(0,0);handleStoreClick(e)}} className="btn">Explore store</button>
          <button onClick={(e)=>{window.scrollTo(0,0);handleContactClick(e)}} className="ghost-btn">contact us</button>
        </div>
      </div>
      <img src={HeroRightImage} alt="hero Image" />
    </div>
  );
};

export default HeroSection;
