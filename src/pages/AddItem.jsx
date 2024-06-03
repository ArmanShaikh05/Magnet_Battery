// import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddItem = () => {
  const [disable, setDisable] = useState(false);

  const [name, setName] = useState("");
  const [mrp, setMrp] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [vehicles, setVehicles] = useState("");
  const [oldBatteryPrice, setOldBatteryPrice] = useState("");
  const [brand, setBrand] = useState("Amaron");
  // const [category, setCategory] = useState("Two-Wheeler");
  const [itemCode, setItemCode] = useState("");
  const [voltage, setVoltage] = useState("");
  const [amphere, setAmphere] = useState("");
  const [totalWarranty, setTotalWarranty] = useState("");
  const [freeWarranty, setFreeWarranty] = useState("");
  const [proRataWarranty, setProRataWarranty] = useState("");
  const [file, setFile] = useState("");

  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
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

  const createNewPost = async (e) => {
    e.preventDefault();
    setDisable(true);

    if (name.length === 0) {
      toast.error("Name is Required");
      setDisable(false);
    } else if (!file) {
      toast.error("Please Add an Image");
      setDisable(false);
    } else if (brand.length === 0) {
      toast.error("Please Specify Brand");
      setDisable(false);
    } else if (categories.length === 0) {
      toast.error("Please Specify Category");
      setDisable(false);
    } else if (mrp.length === 0) {
      toast.error("MRP is required");
      setDisable(false);
    } else if (sellingPrice.length === 0) {
      toast.error("Selling Price is required");
      setDisable(false);
    } else if (vehicles.length === 0) {
      toast.error("Add Atleast One Vehicle");
      setDisable(false);
    } else if (oldBatteryPrice.length === 0) {
      toast.error("Old Battery Price is required");
      setDisable(false);
    } else if (itemCode.length === 0) {
      toast.error("Item Code is required");
      setDisable(false);
    } else if (voltage.length === 0) {
      toast.error("Voltage is required");
      setDisable(false);
    } else if (amphere.length === 0) {
      toast.error("Amphere is required");
      setDisable(false);
    } else if (
      totalWarranty.length === 0 ||
      freeWarranty.length === 0 ||
      proRataWarranty.length === 0
    ) {
      toast.error("Please add warranty details");
      setDisable(false);
    } else {
      const data = new FormData();
      data.set("name", name);
      data.set("boxPrice", mrp);
      data.set("sellingPrice", sellingPrice);
      data.set("vehicles", vehicles);
      data.set("oldBatteryPrice", oldBatteryPrice);
      data.set("brand", brand);
      categories.forEach((cat) => data.append("category[]", cat));
      data.set("itemCode", itemCode);
      data.set("voltage", voltage);
      data.set("amphere", amphere);
      data.set("totalWarranty", totalWarranty);
      data.set("freeWarranty", freeWarranty);
      data.set("proRataWarranty", proRataWarranty);
      data.set("file", file[0]);

      try {
        toast
          .promise(
            axios.post(
              `${import.meta.env.VITE_SERVER}/api/v1/products/new`,
              data
            ),
            {
              loading: "Adding Item",
              success: <b>Item Added</b>,
              error: <b>Could not add item</b>,
            }
          )
          .then(() => {
            window.scrollTo(0, 0);
            navigate("/manage-store");
            setDisable(false);
          })
          .catch((error) => {
            toast.error(error.message);
            setDisable(false);
          });
      } catch (error) {
        setDisable(false);
        console.log(error);
      }
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
                onChange={(e) => handleChecked(e)}
              />{" "}
              <p>Two Wheelers</p>
            </div>
            <div className="check-options-row">
              <input
                type="checkbox"
                value="Three Wheelers"
                onChange={(e) => handleChecked(e)}
              />{" "}
              <p>Three Wheelers</p>
            </div>
            <div className="check-options-row">
              <input
                type="checkbox"
                value="Passenger Vehicles"
                onChange={(e) => handleChecked(e)}
              />{" "}
              <p>Passenger Vehicles</p>
            </div>
            <div className="check-options-row">
              <input
                type="checkbox"
                value="Heavy Vehicles"
                onChange={(e) => handleChecked(e)}
              />{" "}
              <p>Heavy Vehicles</p>
            </div>
            <div className="check-options-row">
              <input
                type="checkbox"
                value="Inverter Battery"
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
            onClick={createNewPost}
            disabled={disable}
            type="submit"
          >
            Create Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
