import leftComma from "../../assets/leftComma.svg";
import rightComma from "../../assets/rightComma.svg";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  /* eslint-disable react/prop-types */
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, scale:"1.5"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, scale:"1.5"}}
      onClick={onClick}
    />
  );
}

const Testimonial = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <section className="testimonial">
      <div className="container">
        <h1>What Our Customers Say</h1>
        <div className="slider-container">
          <Slider {...settings} className="testimonial-container">
            <div className="testimonial-box">
              <div className="testimonial-text">
                <img className="leftComma" src={leftComma} alt="leftComma" />
                <img className="rightComma" src={rightComma} alt="rightComma" />
                <p>
                  Working with XYZ Company was an absolute delight! Their
                  professionalism and attention to detail exceeded my
                  expectations. From the initial consultation to the final
                  delivery, they ensured that every aspect of the project was
                  handled with care. Not only did they meet our requirements,
                </p>
              </div>
              <div className="profile-img"></div>
              <div className="profile-details">
                <h1>Arman Shaikh, Boisar</h1>
                <p>AmarON Z5</p>
              </div>
            </div>

            <div className="testimonial-box">
              <div className="testimonial-text">
                <img className="leftComma" src={leftComma} alt="leftComma" />
                <img className="rightComma" src={rightComma} alt="rightComma" />
                <p>
                  Working with XYZ Company was an absolute delight! Their
                  professionalism and attention to detail exceeded my
                  expectations. From the initial consultation to the final
                  delivery, they ensured that every aspect of the project was
                  handled with care. Not only did they meet our requirements,
                </p>
              </div>
              <div className="profile-img"></div>
              <div className="profile-details">
                <h1>Arman Shaikh, Boisar</h1>
                <p>AmarON Z5</p>
              </div>
            </div>

            <div className="testimonial-box">
              <div className="testimonial-text">
                <img className="leftComma" src={leftComma} alt="leftComma" />
                <img className="rightComma" src={rightComma} alt="rightComma" />
                <p>
                  Working with XYZ Company was an absolute delight! Their
                  professionalism and attention to detail exceeded my
                  expectations. From the initial consultation to the final
                  delivery, they ensured that every aspect of the project was
                  handled with care. Not only did they meet our requirements,
                </p>
              </div>
              <div className="profile-img"></div>
              <div className="profile-details">
                <h1>Arman Shaikh, Boisar</h1>
                <p>AmarON Z5</p>
              </div>
            </div>

            <div className="testimonial-box">
              <div className="testimonial-text">
                <img className="leftComma" src={leftComma} alt="leftComma" />
                <img className="rightComma" src={rightComma} alt="rightComma" />
                <p>
                  Working with XYZ Company was an absolute delight! Their
                  professionalism and attention to detail exceeded my
                  expectations. From the initial consultation to the final
                  delivery, they ensured that every aspect of the project was
                  handled with care. Not only did they meet our requirements,
                </p>
              </div>
              <div className="profile-img"></div>
              <div className="profile-details">
                <h1>Arman Shaikh, Boisar</h1>
                <p>AmarON Z5</p>
              </div>
            </div>

            <div className="testimonial-box">
              <div className="testimonial-text">
                <img className="leftComma" src={leftComma} alt="leftComma" />
                <img className="rightComma" src={rightComma} alt="rightComma" />
                <p>
                  Working with XYZ Company was an absolute delight! Their
                  professionalism and attention to detail exceeded my
                  expectations. From the initial consultation to the final
                  delivery, they ensured that every aspect of the project was
                  handled with care. Not only did they meet our requirements,
                </p>
              </div>
              <div className="profile-img"></div>
              <div className="profile-details">
                <h1>Arman Shaikh, Boisar</h1>
                <p>AmarON Z5</p>
              </div>
            </div>

            <div className="testimonial-box">
              <div className="testimonial-text">
                <img className="leftComma" src={leftComma} alt="leftComma" />
                <img className="rightComma" src={rightComma} alt="rightComma" />
                <p>
                  Working with XYZ Company was an absolute delight! Their
                  professionalism and attention to detail exceeded my
                  expectations. From the initial consultation to the final
                  delivery, they ensured that every aspect of the project was
                  handled with care. Not only did they meet our requirements,
                </p>
              </div>
              <div className="profile-img"></div>
              <div className="profile-details">
                <h1>Arman Shaikh, Boisar</h1>
                <p>AmarON Z5</p>
              </div>
            </div>
          </Slider>

          {/* <div className="testimonial-box">
            <div className="testimonial-text">
              <img className="leftComma" src={leftComma} alt="leftComma" />
              <img className="rightComma" src={rightComma} alt="rightComma" />
              <p>
                Working with XYZ Company was an absolute delight! Their
                professionalism and attention to detail exceeded my
                expectations. From the initial consultation to the final
                delivery, they ensured that every aspect of the project was
                handled with care. Not only did they meet our requirements,
              </p>
            </div>
            <div className="profile-img"></div>
            <div className="profile-details">
              <h1>Arman Shaikh, Boisar</h1>
              <p>AmarON Z5</p>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="testimonial-text">
              <img className="leftComma" src={leftComma} alt="leftComma" />
              <img className="rightComma" src={rightComma} alt="rightComma" />
              <p>
                Working with XYZ Company was an absolute delight! Their
                professionalism and attention to detail exceeded my
                expectations. From the initial consultation to the final
                delivery, they ensured that every aspect of the project was
                handled with care. Not only did they meet our requirements,
              </p>
            </div>
            <div className="profile-img"></div>
            <div className="profile-details">
              <h1>Arman Shaikh, Boisar</h1>
              <p>AmarON Z5</p>
            </div>
          </div>

          <div className="testimonial-box">
            <div className="testimonial-text">
              <img className="leftComma" src={leftComma} alt="leftComma" />
              <img className="rightComma" src={rightComma} alt="rightComma" />
              <p>
                Working with XYZ Company was an absolute delight! Their
                professionalism and attention to detail exceeded my
                expectations. From the initial consultation to the final
                delivery, they ensured that every aspect of the project was
                handled with care. Not only did they meet our requirements,
              </p>
            </div>
            <div className="profile-img"></div>
            <div className="profile-details">
              <h1>Arman Shaikh, Boisar</h1>
              <p>AmarON Z5</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
