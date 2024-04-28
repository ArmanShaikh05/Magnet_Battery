import phone from '../assets/phone.svg'
import email from '../assets/email.svg'
import locationIcon from "../assets/location.svg"
import whatsapp from "../assets/whatsapp.svg"

const ContactUs = () => {
  return (
    <section className="contactus">
        <div className="container">
            <h1 className='underlined-text'>get in touch with us</h1>

            <div className="contact-details">
                <div className="mobile-number">
                    <img src={phone} alt="phone" />
                    <p>8585784512</p>
                </div>
                <div className="email">
                    <img src={email} alt="email" />
                    <p>magnetbattery123@gmail.com</p>
                </div>
            </div>
            <div className="address">
                <img src={locationIcon} alt="location" />
                <p>hindustan garage, shop no. 1, manor rd. khairapada, boisar(E), 401501</p>
            </div>

            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.2719363283577!2d72.76337687526821!3d19.786064281570166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71fa028c2991d%3A0xad28fbdb8438816!2sMagnet%20Battery!5e0!3m2!1sen!2sin!4v1714313783120!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <form >
                <div className="left-form-section">
                    <input type="text" placeholder='Your Name' required />
                    <input type="email" placeholder='Your Email' required/>
                    <input type="text" placeholder='Your Mobile Number' required/>
                </div>
                <div className="right-form-section">
                    <textarea name="" ></textarea>
                </div>
            </form>
                <button className='btn form-btn'>submit your messAGE</button>
                <button className='ghost-btn form-btn'>
                    <img src={whatsapp} alt="whatsapp" />
                    chat with us on whatsapp
                    </button>

            

        </div>
    </section>
  )
}

export default ContactUs