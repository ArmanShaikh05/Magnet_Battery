import warehouse from "../assets/warehouse.svg";
import twoWheeler from "../assets/twoWheeler.svg";
import threeWheeler from "../assets/threeWheeler.svg";
import heavyVehicle from "../assets/heavyVehicle.svg";
import passengerVehicle from "../assets/PassengerVehicle.svg";
import inverter from "../assets/inverterBattery.svg";
import searchIcon from "../assets/searchIcon.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { useSidebarContextHook } from "../context/contextHooks";

const ManageStore = () => {
  const navigate = useNavigate()
//   const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const {setShowSidebar} = useSidebarContextHook()
  return (
    <div className="store-page">
      <div className="services store">
        <div className="container">
          <h1 className="underlined-text">Looking For</h1>
          <div className="store-container service-box-container ">

            <input type="radio" className="radio-btns" name="storeItemCategory"  id="allitems" />
            <label
              htmlFor="allitems"
              onClick={() => {setShowSidebar(false);navigate("")}}
              className="service-box store-cat"
            >
              <img src={warehouse} alt="" />
              <p>All Items</p>
            </label>

            <input type="radio" className="radio-btns" name="storeItemCategory" id="twowheeler" />
            <label
              htmlFor="twowheeler"
              onClick={() => {setShowSidebar(false);navigate("twoWheelers")}}
              className="service-box store-cat"
            >
              <img src={twoWheeler} alt="" />
              <p>Two Wheelers</p>
            </label>

            <input type="radio" className="radio-btns" name="storeItemCategory" id="threeWheeler" />
            <label htmlFor="threeWheeler"  onClick={() => {setShowSidebar(false);navigate("threeWheelers")}} className="service-box store-cat">
              <img src={threeWheeler} alt="" />
              <p>Three Wheelers</p>
            </label>

            <input
              type="radio"
              name="storeItemCategory"
              id="passengerVehicle"
              className="radio-btns"
            />
            <label htmlFor="passengerVehicle" onClick={() => {setShowSidebar(false);navigate("passengerVehicles")}} className="service-box store-cat">
              <img src={passengerVehicle} alt="" />
              <p>Passenger Vehicles</p>
            </label>

            <input type="radio" className="radio-btns" name="storeItemCategory" id="heavyVehicle" />
            <label htmlFor="heavyVehicle" onClick={() => {setShowSidebar(false);navigate("heavyVehicles")}} className="service-box store-cat">
              <img src={heavyVehicle} alt="" />
              <p>Heavy Vehicles</p>
            </label>

            <input type="radio" className="radio-btns" name="storeItemCategory" id="inverter" />
            <label htmlFor="inverter" onClick={() => {setShowSidebar(false);navigate("inverterBattery")}} className="service-box store-cat">
              <img src={inverter} alt="" />
              <p>Inverter & Battery</p>
            </label>
          </div>
        </div>
      </div>
      <div className="filter-container">
        <div className="container">

          <div className="search-area">
            <input
              type="search"
              name="search"
              placeholder="search by name, vehicle"
            />
            <div className="search-icon">
              <img src={searchIcon} alt="searchicon" />
            </div>
          </div>


          <div className="store-btns">
              <div className="filter-area">
                <label>Choose Brand</label>
                <select name="brands">
                  <option value="All">All</option>
                  <option value="Amaron">Amaron</option>
                  <option value="Exide">Exide</option>
                  <option value="PowerZone">PowerZone</option>
                  <option value="Luminous">Luminous</option>
                  <option value="Microtek">Microtek</option>
                </select>
              </div>
              <button className="btn" onClick={()=>{window.scrollTo(0,0);navigate('/add')}}>Add Item</button>
          </div>

          
        </div>

      </div>

      <div className="container store-item-container">
        <Outlet />
      </div>
    </div>
  );
};

export default ManageStore;
