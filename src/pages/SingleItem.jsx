import { useNavigate } from "react-router-dom";
import amaronBattery from "../assets/amaronBattery.png";
import returnIcon from "../assets/return.svg";

const SingleItem = () => {
    const navigate = useNavigate()
  return (
    <div className="single-item">
        <div className="container single-item-container">
          <div className="go-back-btn">
            <button className="btn" onClick={()=>navigate("/store")}> Go back </button>
          </div>
          <h1>
            AMARON PRO Bike Rider 2 Wheeler Battery - 12APBTX50 (ABR-PR-12APBTX50)
          </h1>
          <img src={amaronBattery} alt="amaronBattery" className="item-img" />
          <div className="item-price-details">


            <div className="baseprice-row">
              <div className="baseprice">base price</div>
              <div className="price">₹ 1500</div>
            </div>

            <div className="baseprice-row">
              <div className="baseprice">Special discount <span>(10%)</span></div>
              <div className="price discount-price">₹ 150</div>
            </div>

            <div className="baseprice-row">
              <div className="baseprice">total price</div>
              <div className="price">₹ 1350</div>
            </div>
        
            
          </div>

          <div className="return-details-box">
            <div className="return-statement">
                <img src={returnIcon} alt="recycle-icon" />
                <h1>Rebate on return of old battery</h1>
            </div>
            <div className="return-notice">
                <p className="price">₹ 290</p>
                <p className="notice">*Additionally, rebate upto 290 per unit on return of similar old battery</p>
            </div>
          </div>

          <div className="details-table">


            <div className="table-row">
                <p className="table-heading">brand</p>
                <p className="table-text">amaron</p>
            </div>
            <div className="table-row">
                <p className="table-heading">series</p>
                <p className="table-text">pro</p>
            </div>
            <div className="table-row">
                <p className="table-heading">item code</p>
                <p className="table-text">abr-pr-12apbtx50</p>
            </div>
            <div className="table-row">
                <p className="table-heading">voltage (v)</p>
                <p className="table-text">12</p>
            </div>
            <div className="table-row">
                <p className="table-heading">amphere (ah)</p>
                <p className="table-text">9</p>
            </div>
            <div className="table-row">
                <p className="table-heading">total warranty <span>(months)</span></p>
                <p className="table-text">48</p>
            </div>
            <div className="table-row">
                <p className="table-heading">free warranty <span>(months)</span></p>
                <p className="table-text">24</p>
            </div>
            <div className="table-row">
                <p className="table-heading">pro-rata warranty <span>(months)</span></p>
                <p className="table-text">24</p>
            </div>
            <div className="table-row">
                <p className="table-heading">compatible with</p>
                <p className="table-text">bajaj avenger, honda shine</p>
            </div>


          </div>

          <p>For additional inquiries related to batteries and prices, feel free to contact us.</p>

          <button className="btn" onClick={()=>{window.scrollTo(0,0);navigate("/contact")}}>contact us</button>
        </div>
    </div>
  );
};

export default SingleItem;
