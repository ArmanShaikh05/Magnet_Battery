import logo from "../assets/logo.png"
import email from "../assets/email.svg"

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-line-1">
                <img src={logo} alt="logo" />
                <p>hindustan garage, shop no. 1, manor rd. khairapada, boisar(E), 401501              </p>
            </div>
            <div className="footer-line-2">
                <div className="box1">
                    <img src={email} alt="email" />
                    <p>magnetbattery123@gmail.com</p>
                </div>
                <div className="box2">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </div>

        <div className="footer-2">
            <p>Copyright © 2024 Magnet Battery. All rights reserved</p>
        </div>

    </div>
  )
}

export default Footer