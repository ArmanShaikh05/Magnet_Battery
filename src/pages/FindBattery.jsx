import { useState } from "react";
import data from "../../data";
import axios from "axios";
import SectionLoader from "../components/SectionLoader";
import StoreItem from "../components/store/StoreItem";
import toast from "react-hot-toast";
import { useSidebarContextHook } from "../context/contextHooks";

const FindBattery = () => {
  const [vehicle, setVehicle] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [type, setType] = useState("");

  const [batteries, setBatteries] = useState([]);
  const [vehicleArray, setVehicleArray] = useState([]);
  const [modelArray, setModelArray] = useState([]);
  const [typeArray, setTypeArray] = useState([]);

  const [batteryData, setBatteryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const [heading, setHeading] = useState("");

  const { setShowSidebar } = useSidebarContextHook();


  const changeVehicle = (e) => {
      setBrand("");
      setModel("");
      setType("");
      setVehicle(e.target.value);
    if (data.length > 0 && e.target.value != "") {
      setVehicleArray(
        data.find((vh) => vh.category === e.target.value).description
      );
    }
    else{
        setVehicleArray("")
        setModelArray("")
        setTypeArray("")
    }
  };

  const changeBrand = (e) => {
    setModel("");
    setType("");
    setBrand(e.target.value);
    if (vehicleArray.length > 0 && e.target.value != "") {
      setModelArray(
        vehicleArray.find((vh) => vh.brand === e.target.value).vehicles
      );
    }else{
        setModelArray("")
        setTypeArray("")
    }
  };

  const changeModel = (e) => {
    setType("");
    setModel(e.target.value);
    if (modelArray.length > 0 && e.target.value != "") {
      setTypeArray(modelArray.find((vh) => vh.model === e.target.value).type);
    }
    else{
        setTypeArray("")
    }
  };

  const changeType = (e) => {
    setType(e.target.value);
    if (typeArray.length > 0 && e.target.value != "") {
      setBatteries(typeArray.find((vh) => vh.type === e.target.value).battery);
    }
  };

  const findBattery = async (e) => {
    e.preventDefault();
    setShowSidebar(false)
    if(!vehicle || !brand || !model || !type){
        toast.error("Choose All Fields")
        setBatteryData([])
        setShowHeading(false)
        return
    }
    setLoading(true);
    let temp = [];
    for (let i = 0; i < batteries.length; i++) {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/v1/products/all?search=${
          batteries[i]
        }`
      );
      temp.push(response.data);
    }

    setBatteryData(temp);
    setHeading(`Compatible Batteries for ${brand} ${model} (${type})`)
    setShowHeading(true)
    setLoading(false);
  };


  return (
    <div className="container">
      <section className="find-battery-container">
        <h1 className="underlined-text">Choose Your Battery</h1>

        <div className="battery-filter-box">

          <div className="filter-container">

            <div className="filter">
              <h2>Select Vehicle</h2>
              <select value={vehicle} onChange={(e) => changeVehicle(e)}>
                <option value="">Select</option>
                {data.map((item, key) => (
                  <option key={key} value={item.category}>
                    {item.category}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter">
              <h2>Select Brand</h2>
              <select value={brand} onChange={(e) => changeBrand(e)}>
                <option value="">Select</option>
                {vehicleArray ? vehicleArray.map((item, key) => (
                  <option key={key} value={item.brand}>
                    {item.brand}
                  </option>
                )):null}
              </select>
            </div>

            <div className="filter">
              <h2>Select Model</h2>
              <select value={model} onChange={(e) => changeModel(e)}>
                <option value="">Select</option>
                {modelArray ? modelArray.map((item, key) => (
                  <option key={key} value={item.model}>
                    {item.model}
                  </option>
                )):null}
              </select>
            </div>

            <div className="filter">
              <h2>Select Type</h2>
              <select value={type} onChange={(e) => changeType(e)}>
                <option value="">Select</option>
                {typeArray ? typeArray.map((item, key) => (
                  <option key={key} value={item.type}>
                    {item.type}
                  </option>
                )): null}
              </select>
            </div>
            
          </div>

          <button className="btn" onClick={(e) => findBattery(e)}>
            Find Battery
          </button>
        </div>

        <div className="battery-area">

          {showHeading ? <h1>{heading}</h1> : null }

          {loading ? <SectionLoader /> : batteryData ? batteryData.map((item)=>(
            item.map((subitem,key)=>(
                 <StoreItem key={key} itemData={subitem}/>
            ))
          ))  :null}

        </div>
      </section>
    </div>
  );
};

export default FindBattery;
