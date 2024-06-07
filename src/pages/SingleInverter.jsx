import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useGlobalContextHook } from "../context/contextHooks";

const SingleInverter = () => {
    const navigate = useNavigate()
    const id = useParams().id

    const {path} = useGlobalContextHook()

    const [name, setName] = useState("");
    const [mrp, setMrp] = useState("");
    const [sellingPrice, setSellingPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [itemCode, setItemCode] = useState("");
    const [voltage, setVoltage] = useState("");
    const [watt, setWatt] = useState("");
    const [warranty, setWarranty] = useState("");
    const [image, setImage] = useState('')

    const [discountPrice, setDiscountPrice] = useState()
    const [discountPercent, setDiscountPercent] = useState()
    const [loading, setLoading] = useState(false)


    useEffect(()=>{
      setLoading(true)
      fetch(`${import.meta.env.VITE_SERVER}/api/v1/products/all/inverter/${id}`).then((response)=>{
        response.json().then((itemData)=>{
          setName(itemData.name);
          setMrp(itemData.boxPrice);
          setSellingPrice(itemData.sellingPrice);
          setBrand(itemData.brand);
          setItemCode(itemData.itemCode);
          setVoltage(itemData.voltage);
          setWatt(itemData.watt);
          setWarranty(itemData.warranty);
          setDiscountPercent((((itemData.boxPrice - itemData.sellingPrice) / itemData.boxPrice)*100).toFixed(1))
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
            <button className="btn" onClick={()=>navigate(`/store/${path}`)}> Go To Store </button>
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
                <p className="table-heading">watt (VA)</p>
                <p className="table-text">{watt}</p>
            </div>
            <div className="table-row">
                <p className="table-heading">warranty <span>(months)</span></p>
                <p className="table-text">{warranty}</p>
            </div>

          </div>

          <p>For additional inquiries related to batteries and prices, feel free to contact us.</p>

          <button className="btn" onClick={()=>{window.scrollTo(0,0);navigate("/contact")}}>contact us</button>
        </div>}
    </div>
  );
};

export default SingleInverter;
