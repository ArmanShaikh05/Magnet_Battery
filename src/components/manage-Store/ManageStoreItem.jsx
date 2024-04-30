import { useNavigate } from "react-router-dom"
import amaronBattery from "../../assets/amaronBattery.png"
import { useState } from "react";
import DeleteOverlay from "../DeleteOverlay";

const ManageStoreItem = () => {
  const navigate = useNavigate()
  const [showOverlay, setShowOverlay] = useState(false);
  return (
    <>
    <DeleteOverlay
    open={showOverlay}
    setOpen={setShowOverlay}
  />
    <div className="store-item">
        <div className="store-item-img"><img src={amaronBattery} alt="amaronBattery" /></div>
        <div className="item-details">
            <h1>AMARON PRO Bike Rider 2 Wheeler Battery - APBTZ4L (ABR-PR-APBTZ4L)</h1>
            <span>₹1500</span>
            <div className="item-price-box">
                <p className="item-price">₹1300 /-</p>
                <p className="item-discount">(15% off)</p>
            </div>
            <div className="compatible-vehicles">
                <p><strong>Compatible with - </strong>Bajaj Avenger, Honda Shine, Activa </p>
                <button onClick={()=>{window.scrollTo(0,0),navigate('/single-item')}}  className="btn">View details</button>
            </div>

            <div className="manage-btns">
              <button className=" btn" onClick={()=>{window.scrollTo(0,0);navigate("/edit")}}>Edit Item</button>
              <button className="btn delete-btn" onClick={() => setShowOverlay(true)}>Delete Item</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ManageStoreItem