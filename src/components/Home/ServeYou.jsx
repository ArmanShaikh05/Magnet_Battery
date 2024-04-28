import twoWheeler from '../../assets/twoWheeler.svg'
import threeWheeler from "../../assets/threeWheeler.svg"
import heavyVehicle from "../../assets/heavyVehicle.svg"
import passengerVehicle from "../../assets/PassengerVehicle.svg"
import inverter from "../../assets/inverterBattery.svg"

const ServeYou = () => {
  return (
    <div className="services">
        <div className="container">
            <h1 className="underlined-text"> Always ready to serve you</h1>
            <div className="service-box-container">
                <div className="service-box">
                    <img src={twoWheeler} alt="" />
                    <p>Two Wheelers</p>
                </div>
                <div className="service-box">
                    <img src={threeWheeler} alt="" />
                    <p>Three Wheelers</p>
                </div>
                <div className="service-box">
                    <img src={passengerVehicle} alt="" />
                    <p>Passenger Vehicles</p>
                </div>
                <div className="service-box">
                    <img src={heavyVehicle} alt="" />
                    <p>Heavy Vehicles</p>
                </div>
                <div className="service-box">
                    <img src={inverter} alt="" />
                    <p>Inverter & Battery</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServeYou