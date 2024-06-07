import { useNavigate } from "react-router-dom"
import { useState } from "react";
import DeleteOverlay from "../DeleteOverlay";
import { useSidebarContextHook } from "../../context/contextHooks";

/* eslint-disable react/prop-types */
const ManageInverterItem = ({itemData,forceUpdate}) => {
  const navigate = useNavigate()
  const [showOverlay, setShowOverlay] = useState(false);
  const {setShowSidebar} = useSidebarContextHook()
  const discount = (((itemData.boxPrice - itemData.sellingPrice) / itemData.boxPrice)*100).toFixed(1)

  return (
    <>
    <DeleteOverlay
    open={showOverlay}
    setOpen={setShowOverlay}
    id={itemData._id}
    name={itemData.name}
    forceUpdate={forceUpdate}
    type={"Inverter"}
  />
    <div className="store-item">
        <div className="store-item-img"><img src={itemData.image.url} alt="amaronBattery" /></div>
        <div className="item-details">
            <h1>{itemData.name}</h1>
            <span>₹ {itemData.boxPrice}</span>
            <div className="item-price-box">
                <p className="item-price">₹ {itemData.sellingPrice} /-</p>
                <p className="item-discount">({discount}% off)</p>
            </div>

            <div className="manage-btns">
              <button className=" btn" onClick={()=>{window.scrollTo(0,0);setShowSidebar(false);navigate(`/edit/inverter/${itemData._id}`)}}>Edit Item</button>
              <button className="btn delete-btn" onClick={() => setShowOverlay(true)}>Delete Item</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ManageInverterItem