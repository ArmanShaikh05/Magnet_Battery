import { useNavigate } from "react-router-dom"

/* eslint-disable react/prop-types */
const StoreItem = ({itemData}) => {
  const navigate = useNavigate()
  return (
    <div className="store-item">
        <div className="store-item-img"><img src={itemData.image.url} alt="amaronBattery" /></div>
        <div className="item-details">
            <h1>{itemData.name}</h1>
            <span>{itemData.boxPrice}</span>
            <div className="item-price-box">
                <p className="item-price">{itemData.sellingPrice} /-</p>
                <p className="item-discount">(15% off)</p>
            </div>
            <div className="compatible-vehicles">
                <p><strong>Compatible with - </strong>{itemData.vehicles}</p>
                <button onClick={()=>{window.scrollTo(0,0),navigate(`/item/${itemData._id}`)}}  className="btn">View details</button>
            </div>
        </div>
    </div>
  )
}

export default StoreItem