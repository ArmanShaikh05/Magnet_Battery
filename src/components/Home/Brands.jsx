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

const Brands = () => {

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
                <img src={amaron} alt="amaron" />
                <img src={exide} alt="exide" />
                <img src={powerzone} alt="powerzone" />
                <img src={luminous} alt="luminous" />
                <img src={microtek} alt="microtek" />
                <img src={okaya} alt="okaya" />
                <img src={sfSonic} alt="sfSonic" />
            </Slider>
        </div>
    </div>
  )
}

export default Brands