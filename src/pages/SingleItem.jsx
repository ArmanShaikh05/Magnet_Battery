import { useNavigate, useParams } from "react-router-dom";
import returnIcon from "../assets/return.svg";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

const SingleItem = () => {
    const navigate = useNavigate()
    const id = useParams().id

    // const [item, setItem] = useState(null)
    const [name, setName] = useState("");
    const [mrp, setMrp] = useState("");
    const [sellingPrice, setSellingPrice] = useState("");
    const [vehicles, setVehicles] = useState("");
    const [oldBatteryPrice, setOldBatteryPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [itemCode, setItemCode] = useState("");
    const [voltage, setVoltage] = useState("");
    const [amphere, setAmphere] = useState("");
    const [totalWarranty, setTotalWarranty] = useState("");
    const [freeWarranty, setFreeWarranty] = useState("");
    const [proRataWarranty, setProRataWarranty] = useState("");
    const [image, setImage] = useState('')

    const [discountPrice, setDiscountPrice] = useState()
    const [discountPercent, setDiscountPercent] = useState()
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
      setLoading(true)
      fetch(`${import.meta.env.VITE_SERVER}/api/v1/products/all/${id}`).then((response)=>{
        response.json().then((itemData)=>{
          setName(itemData.name);
          setMrp(itemData.boxPrice);
          setSellingPrice(itemData.sellingPrice);
          setVehicles(itemData.vehicles);
          setOldBatteryPrice(itemData.oldBatteryPrice);
          setBrand(itemData.brand);
          setItemCode(itemData.itemCode);
          setVoltage(itemData.voltage);
          setAmphere(itemData.amphere);
          setTotalWarranty(itemData.totalWarranty);
          setFreeWarranty(itemData.freeWarranty);
          setProRataWarranty(itemData.proRataWarranty);
          setDiscountPercent((((itemData.boxPrice - itemData.sellingPrice) / itemData.sellingPrice)*100).toFixed(1))
          setDiscountPrice(itemData.boxPrice - itemData.sellingPrice)
          setImage(itemData.image.url)
        })
        setLoading(false)
      })
    },[id])


  return (
    <div className="single-item">
        {loading ? <Loader /> : <div className="container single-item-container">
          <div className="go-back-btn">
            <button className="btn" onClick={()=>navigate("/store")}> Go back </button>
          </div>
          <h1>
            {name}
          </h1>
          <img src={image} alt="amaronBattery" className="item-img" />
          <div className="item-price-details">


            <div className="baseprice-row">
              <div className="baseprice">base price</div>
              <div className="price">₹ {mrp}</div>
            </div>

            <div className="baseprice-row">
              <div className="baseprice">Special discount <span>({discountPercent} %)</span></div>
              <div className="price discount-price">{discountPrice}</div>
            </div>

            <div className="baseprice-row">
              <div className="baseprice">total price</div>
              <div className="price">₹ {sellingPrice}</div>
            </div>
        
            
          </div>

          <div className="return-details-box">
            <div className="return-statement">
                <img src={returnIcon} alt="recycle-icon" />
                <h1>Rebate on return of old battery</h1>
            </div>
            <div className="return-notice">
                <p className="price">₹ {oldBatteryPrice}</p>
                <p className="notice">*Additionally, rebate upto ₹{oldBatteryPrice} per unit on return of similar old battery</p>
            </div>
          </div>

          <div className="details-table">


            <div className="table-row">
                <p className="table-heading">brand</p>
                <p className="table-text">{brand}</p>
            </div>
            <div className="table-row">
                <p className="table-heading">item code</p>
                <p className="table-text">{itemCode}</p>
            </div>
            <div className="table-row">
                <p className="table-heading">voltage (v)</p>
                <p className="table-text">{voltage}</p>
            </div>
            <div className="table-row">
                <p className="table-heading">amphere (ah)</p>
                <p className="table-text">{amphere}</p>
            </div>
            <div className="table-row">
                <p className="table-heading">total warranty <span>(months)</span></p>
                <p className="table-text">{totalWarranty}</p>
            </div>
            <div className="table-row">
                <p className="table-heading">free warranty <span>(months)</span></p>
                <p className="table-text">{freeWarranty}</p>
            </div>
            <div className="table-row">
                <p className="table-heading">pro-rata warranty <span>(months)</span></p>
                <p className="table-text">{proRataWarranty}</p>
            </div>
            <div className="table-row">
                <p className="table-heading">compatible with</p>
                <p className="table-text">{vehicles}</p>
            </div>


          </div>

          <p>For additional inquiries related to batteries and prices, feel free to contact us.</p>

          <button className="btn" onClick={()=>{window.scrollTo(0,0);navigate("/contact")}}>contact us</button>
        </div>}
    </div>
  );
};

export default SingleItem;
