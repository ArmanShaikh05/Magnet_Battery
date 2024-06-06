import twoWheeler from '../../assets/twoWheeler.svg'
import threeWheeler from "../../assets/threeWheeler.svg"
import heavyVehicle from "../../assets/heavyVehicle.svg"
import passengerVehicle from "../../assets/PassengerVehicle.svg"
import inverter from "../../assets/inverterBattery.svg"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {useNavigate} from "react-router-dom"
import { useGlobalContextHook, useSidebarContextHook } from '../../context/contextHooks'

const ServeYou = () => {

    const navigate = useNavigate()
    const { setPath } = useGlobalContextHook();
    const { setShowSidebar } = useSidebarContextHook();

    var settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        responsive: [
          {
            breakpoint: 660,
            settings: {
                dots:true,
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 540,
            settings: {
                dots:true,
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 370,
            settings: {
                dots:true,
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
        ]
      };

  return (
    <div className="services">
        <div className="container">
            <h1 className="underlined-text"> Always ready to serve you</h1>
            <Slider {...settings} className="service-box-container">

                <div className="service-box" onClick={()=>{navigate("/store/twoWheelers");setPath("twoWheelers");setShowSidebar(false);window.scrollTo(0,0)}}>
                    <img src={twoWheeler} alt="" />
                    <p>Two Wheelers</p>
                </div>

                <div className="service-box" onClick={()=>{navigate("/store/threeWheelers");setPath("threeWheelers");setShowSidebar(false);window.scrollTo(0,0)}}>
                    <img src={threeWheeler} alt="" />
                    <p>Three Wheelers</p>
                </div>

                <div className="service-box" onClick={()=>{navigate("/store/passengerVehicles");setPath("passengerVehicles");setShowSidebar(false);window.scrollTo(0,0)}}>
                    <img src={passengerVehicle} alt="" />
                    <p>Passenger Vehicles</p>
                </div>

                <div className="service-box" onClick={()=>{navigate("/store/heavyVehicles");setPath("heavyVehicles");setShowSidebar(false);window.scrollTo(0,0)}}>
                    <img src={heavyVehicle} alt="" />
                    <p>Heavy Vehicles</p>
                </div>

                <div className="service-box" onClick={()=>{navigate("/store/inverterBattery");setPath("inverterBattery");setShowSidebar(false);window.scrollTo(0,0)}}>
                    <img src={inverter} alt="" />
                    <p>Inverter & Battery</p>
                </div>

            </Slider>
        </div>
    </div>
  )
}

export default ServeYou