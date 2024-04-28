import phone from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import locationIcon from "../assets/location.svg";
import whatsapp from "../assets/whatsapp.svg";
import {useState } from "react";
import toast from "react-hot-toast";

const ContactUs = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if(number.length != 10) {
        toast.error("Invalid Number")
        return
    }
    console.log(name,email,number,message)
    const formData = new FormData(event.target);

 
    formData.append("Message",message)
    formData.append("access_key", "eebf6190-2ba3-4efe-924f-929e159dd3ce");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
    }
  };

  const handleChange = (e) =>{
    e.preventDefault()
    if(e.target.name === "Name"){
        setName(e.target.value)
    }
    else if(e.target.name === "Email"){
        setEmail(e.target.value)
    }
    else if(e.target.name === "Number"){
        setNumber(e.target.value)
    }
    else{
        setMessage(e.target.value)
    }
  }

  return (
    <section className="contactus">
      <div className="container">
        <h1 className="underlined-text">get in touch with us</h1>

        <div className="contact-details">
          <div className="mobile-number">
            <img src={phone} alt="phone" />
            <p>8585784512</p>
          </div>
          <div className="email">
            <img src={emailIcon} alt="email" />
            <p>magnetbattery123@gmail.com</p>
          </div>
        </div>
        <div className="address">
          <img src={locationIcon} alt="location" />
          <p>
            hindustan garage, shop no. 1, manor rd. khairapada, boisar(E),
            401501
          </p>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.2719363283577!2d72.76337687526821!3d19.786064281570166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71fa028c2991d%3A0xad28fbdb8438816!2sMagnet%20Battery!5e0!3m2!1sen!2sin!4v1714313783120!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <form onSubmit={onSubmit} method="POST" >
          <div className="form-text-container">
            <div className="left-form-section">
              <input type="text" name="Name" onChange={(e)=>handleChange(e)} value={name} placeholder="Your Name" required />
              <input type="email" name="Email" onChange={(e)=>handleChange(e)} value={email}  placeholder="Your Email" required />
              <input type="number" name="Number" onChange={(e)=>handleChange(e)} value={number} placeholder="Your Mobile Number" required />
            </div>
            <div className="right-form-section">
              <textarea name="Message" onChange={(e)=>handleChange(e)} value={message} required placeholder="Your message"></textarea>
            </div>
          </div>
          <button type="submit" className="btn form-btn">
            submit your messAGE
          </button>
        </form>
        <a href="https://chat.whatsapp.com/CwW286j3Sj2KamGfx7QzSv" target="_blank" className="ghost-btn form-btn">
          <img src={whatsapp} alt="whatsapp" />
          chat with us on whatsapp
        </a>
      </div>
    </section>
  );
};

export default ContactUs;
