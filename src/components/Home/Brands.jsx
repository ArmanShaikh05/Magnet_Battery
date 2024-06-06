import amaron from "../../assets/amaron.png"
import exide from "../../assets/exide.png"
import luminous from "../../assets/luminous.png"
import powerzone from "../../assets/powerzone.png"
import microtek from "../../assets/microtek.png"
import okaya from "../../assets/okaya.png"
import sfSonic from "../../assets/SfSonic.png"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom"
import { useGlobalContextHook, useSidebarContextHook } from "../../context/contextHooks"

const Brands = () => {

  const navigate = useNavigate()
  const { setBrand, setPath} = useGlobalContextHook();
  const { setShowSidebar } = useSidebarContextHook();

  var settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <div className="brands">
        <div className="container">
            <h1 className="underlined-text"> Brands We Deal In</h1>
            <Slider {...settings} className="brands-box-container">
                <img  src={amaron} alt="amaron" onClick={()=>{navigate("/store/");setBrand("Amaron");setPath("");setShowSidebar(false);window.scrollTo(0,0)}} />

                <img src={exide} alt="exide" onClick={()=>{navigate("/store/");setBrand("Exide");setPath("");setShowSidebar(false);window.scrollTo(0,0)}} />

                <img src={powerzone} alt="powerzone" onClick={()=>{navigate("/store/");setBrand("PowerZone");setPath("");setShowSidebar(false);window.scrollTo(0,0)}} />

                <img src={luminous} alt="luminous" onClick={()=>{navigate("/store/");setBrand("Luminous");setPath("");setShowSidebar(false);window.scrollTo(0,0)}} />

                <img src={microtek} alt="microtek" onClick={()=>{navigate("/store/");setBrand("Microtek");setPath("");setShowSidebar(false);window.scrollTo(0,0)}} />

                <img src={okaya} alt="okaya" onClick={()=>{navigate("/store/");setBrand("Okaya");setPath("");setShowSidebar(false);window.scrollTo(0,0)}} />

                <img src={sfSonic} alt="sfSonic" onClick={()=>{navigate("/store/");setBrand("SFsonic");setPath("");setShowSidebar(false);window.scrollTo(0,0)}} />

            </Slider>
        </div>
    </div>
  )
}

export default Brands