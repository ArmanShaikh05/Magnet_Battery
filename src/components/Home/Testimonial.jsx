import leftComma from "../../assets/leftComma.svg"
import rightComma from "../../assets/rightComma.svg"

const Testimonial = () => {
  return (
    <section className="testimonial">
        <div className="container">
            <h1>What Our Customers Say</h1>
            <div className="testimonial-container">

                <div className="testimonial-box">
                    <div className="testimonial-text">
                        <img className="leftComma" src={leftComma} alt="leftComma" />
                        <img className="rightComma" src={rightComma} alt="rightComma" />
                        <p>Working with XYZ Company was an absolute delight! Their professionalism and attention to detail exceeded my expectations. From the initial consultation to the final delivery, they ensured that every aspect of the project was handled with care. Not only did they meet our requirements,</p>
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
                        <p>Working with XYZ Company was an absolute delight! Their professionalism and attention to detail exceeded my expectations. From the initial consultation to the final delivery, they ensured that every aspect of the project was handled with care. Not only did they meet our requirements,</p>
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
                        <p>Working with XYZ Company was an absolute delight! Their professionalism and attention to detail exceeded my expectations. From the initial consultation to the final delivery, they ensured that every aspect of the project was handled with care. Not only did they meet our requirements,</p>
                    </div>
                    <div className="profile-img"></div>
                    <div className="profile-details">
                      <h1>Arman Shaikh, Boisar</h1>
                      <p>AmarON Z5</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Testimonial