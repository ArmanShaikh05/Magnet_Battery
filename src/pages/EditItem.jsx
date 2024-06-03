import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useSidebarContextHook } from "../context/contextHooks";

const EditItem = () => {
  const id = useParams().id;
  const [disable,setDisable] = useState(false)

  const [name, setName] = useState("");
  const [mrp, setMrp] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [vehicles, setVehicles] = useState("");
  const [oldBatteryPrice, setOldBatteryPrice] = useState("");
  const [brand, setBrand] = useState("Amaron");
  const [categories, setCategories] = useState([]);
  const [itemCode, setItemCode] = useState("");
  const [voltage, setVoltage] = useState("");
  const [amphere, setAmphere] = useState("");
  const [totalWarranty, setTotalWarranty] = useState("");
  const [freeWarranty, setFreeWarranty] = useState("");
  const [proRataWarranty, setProRataWarranty] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();
  const {setShowSidebar} = useSidebarContextHook()

  useEffect(() => {
    fetchData();
  }, [id]);

  const  fetchData = async () => {
    await fetch(`${import.meta.env.VITE_SERVER}/api/v1/products/all/${id}`).then(
      (response) => {
        response.json().then((itemData) => {
          setName(itemData.name);
          setMrp(itemData.boxPrice);
          setSellingPrice(itemData.sellingPrice);
          setVehicles(itemData.vehicles);
          setOldBatteryPrice(itemData.oldBatteryPrice);
          setBrand(itemData.brand);
          setCategories(itemData.category);
          setItemCode(itemData.itemCode);
          setVoltage(itemData.voltage);
          setAmphere(itemData.amphere);
          setTotalWarranty(itemData.totalWarranty);
          setFreeWarranty(itemData.freeWarranty);
          setProRataWarranty(itemData.proRataWarranty);
        });
      }
    );
  };

  const checkboxes = document.querySelectorAll(".checkboxes")

  if (categories.length !== 0) {
    categories.forEach((cats)=>{
      checkboxes.forEach((checkbox)=>{
        if(checkbox.value === cats){
          checkbox.checked = true
        }
        
      })
    })
  }

  const handleNavigate = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setShowSidebar(false)
    navigate("/manage-store");
  };

  const handleChecked = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setCategories([...categories, value]);
    }
    if (checked === false) {
      setCategories(categories.filter((category) => category !== value));
    }
  };
 

  const updateItem = async (e) => {
    e.preventDefault();
    setDisable(true)

    try {
      const data = new FormData();
      data.set("name", name);
      data.set("boxPrice", mrp);
      data.set("sellingPrice", sellingPrice);
      data.set("vehicles", vehicles);
      data.set("oldBatteryPrice", oldBatteryPrice);
      data.set("brand", brand);
      categories.forEach((cats) => data.append("category[]",cats))
      data.set("itemCode", itemCode);
      data.set("voltage", voltage);
      data.set("amphere", amphere);
      data.set("totalWarranty", totalWarranty);
      data.set("freeWarranty", freeWarranty);
      data.set("proRataWarranty", proRataWarranty);

      if (file?.[0]) {
        data.set("file", file?.[0]);
      }

      toast.promise(axios.put(`${import.meta.env.VITE_SERVER}/api/v1/products/edit/${id}`,data),{
        loading: "Updating Item",
        success: <b>Item Updated</b>,
        error: <b>Item Not Updated</b>
      }).then(()=> {window.scrollTo(0,0);navigate("/manage-store");setDisable(false)}).catch((error)=>{
        toast.error(error.message)
        setDisable(false)
      })

      setDisable(false)

    } catch (error) {
      setDisable(false)
      console.log(error);
    }
  };

  return (
    <div className="container add-item">
      <form>
        <div className="form-row">
          <h1>Name</h1>
          <input
            type="text"
            placeholder={"Enter Name"}
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Upload Image</h1>
          <input
            id="file"
            type="file"
            className="inputfile"
            onChange={(e) => setFile(e.target.files)}
            accept=".jpg, .png, .jpeg, .webp, .jfif, .avif"
          />
        </div>

        <div className="form-row">
          <h1>Select Brand</h1>
          <select onChange={(e) => setBrand(e.target.value)} value={brand}>
            <option>Amaron</option>
            <option>Exide</option>
            <option>PowerZone</option>
            <option>Luminous</option>
            <option>Okaya</option>
            <option>SFsonic</option>
            <option>Microtek</option>
          </select>
        </div>

        <div className="form-row checkbox-container">
          <h1>Select Category</h1>
          <div className="check-options-box">
            <div className="check-options-row">
              <input
                type="checkbox"
                value="Two Wheelers"
                className="checkboxes"
                onChange={(e) => handleChecked(e)}
              />{" "}
              <p>Two Wheelers</p>
            </div>
            <div className="check-options-row">
              <input
                type="checkbox"
                value="Three Wheelers"
                className="checkboxes"
                onChange={(e) => handleChecked(e)}
              />{" "}
              <p>Three Wheelers</p>
            </div>
            <div className="check-options-row">
              <input
                type="checkbox"
                value="Passenger Vehicles"
                className="checkboxes"
                onChange={(e) => handleChecked(e)}
              />{" "}
              <p>Passenger Vehicles</p>
            </div>
            <div className="check-options-row">
              <input
                type="checkbox"
                value="Heavy Vehicles"
                className="checkboxes"
                onChange={(e) => handleChecked(e)}
              />{" "}
              <p>Heavy Vehicles</p>
            </div>
            <div className="check-options-row">
              <input
                type="checkbox"
                value="Inverter Battery"
                className="checkboxes"
                onChange={(e) => handleChecked(e)}
              />{" "}
              <p>Inverter Battery</p>
            </div>
          </div>
        </div>

        <div className="form-row">
          <h1>Box Price</h1>
          <input
            type="number"
            placeholder="Enter the MRP"
            required
            value={mrp}
            onChange={(e) => setMrp(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Selling Price</h1>
          <input
            type="number"
            placeholder="Enter the selling price"
            required
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Compatible vehicles</h1>
          <input
            type="text"
            placeholder="Enter the compatible vehicles"
            required
            value={vehicles}
            onChange={(e) => setVehicles(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Old Battery Price</h1>
          <input
            type="number"
            placeholder="Enter the old battery price"
            required
            value={oldBatteryPrice}
            onChange={(e) => setOldBatteryPrice(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Item Code</h1>
          <input
            type="text"
            placeholder="Enter the S.no"
            required
            value={itemCode}
            onChange={(e) => setItemCode(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Voltage (V)</h1>
          <input
            type="number"
            placeholder="Enter the voltage"
            required
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Amphere (AH)</h1>
          <input
            type="number"
            placeholder="Enter the amphere"
            required
            value={amphere}
            onChange={(e) => setAmphere(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Total Warranty</h1>
          <input
            type="number"
            placeholder="Enter the total warranty"
            required
            value={totalWarranty}
            onChange={(e) => setTotalWarranty(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Free Warranty</h1>
          <input
            type="number"
            placeholder="Enter the free waranty"
            required
            value={freeWarranty}
            onChange={(e) => setFreeWarranty(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Pro-Rata Warranty</h1>
          <input
            type="number"
            placeholder="Enter the pro-rata warranty"
            required
            value={proRataWarranty}
            onChange={(e) => setProRataWarranty(e.target.value)}
          />
        </div>

        <div className="btn-Container">
          <button
            className="cancelBtn ghost-btn"
            type="button"
            onClick={(e) => {
              handleNavigate(e);
            }}
          >
            Cancel
          </button>
          <button
            className="createBtn btn"
            onClick={updateItem}
            type="submit"
            disabled={disable}
          >
            Update Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditItem;
