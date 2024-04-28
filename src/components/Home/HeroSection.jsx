import { useNavigate } from "react-router-dom";
import HeroRightImage from "../../assets/heroRightImg.png";

const HeroSection = () => {

  const navigate = useNavigate(); 

  const handleContactClick = (e) => {
    e.preventDefault
    navigate("/contact")
  }

  return (
    <div className="hero container">
      <div className="hero-data">
        <div className="hero-text">
          <h1>A ONE STOP SOLUTION For all your battery need</h1>
          <p>Powering your life, on the road and at home since 2007.</p>
        </div>
        <div className="hero-btns">
          <button className="btn">Explore store</button>
          <button onClick={(e)=>handleContactClick(e)} className="ghost-btn">contact us</button>
        </div>
      </div>
      <img src={HeroRightImage} alt="hero Image" />
    </div>
  );
};

export default HeroSection;
