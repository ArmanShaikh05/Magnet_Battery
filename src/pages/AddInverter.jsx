// import axios from "axios";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useGlobalContextHook, useSidebarContextHook } from "../context/contextHooks";

const AddInverter = () => {

    const [disable, setDisable] = useState(false);

  const [name, setName] = useState("");
  const [mrp, setMrp] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [itemCode, setItemCode] = useState("");
  const [voltage, setVoltage] = useState("");
  const [watt, setWatt] = useState("");
  const [warranty, setWarranty] = useState("");
  const [file, setFile] = useState("");

  const {setShowSidebar} = useSidebarContextHook()
  const {path} = useGlobalContextHook()


  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setShowSidebar(false)
    navigate(`/manage-store/${path}`);
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
    } else if (mrp.length === 0) {
      toast.error("MRP is required");
      setDisable(false);
    } else if (sellingPrice.length === 0) {
      toast.error("Selling Price is required");
      setDisable(false);
    } else if (itemCode.length === 0) {
      toast.error("Item Code is required");
      setDisable(false);
    } else if (voltage.length === 0) {
      toast.error("Voltage is required");
      setDisable(false);
    } else if (watt.length === 0) {
      toast.error("watt is required");
      setDisable(false);
    } else if ( warranty.length === 0) {
      toast.error("Please add warranty details");
      setDisable(false);
    } else {
      const data = new FormData();
      data.set("name", name);
      data.set("boxPrice", mrp);
      data.set("sellingPrice", sellingPrice);
      data.set("brand", brand);
      data.set('category',"UPS")
      data.set("itemCode", itemCode);
      data.set("voltage", voltage);
      data.set("watt", watt);
      data.set("warranty", warranty);
      data.set("file", file[0]);

      try {
        toast
          .promise(
            axios.post(
              `${import.meta.env.VITE_SERVER}/api/v1/products/new/inverter`,
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
            navigate(`/manage-store/${path}`);
            setDisable(false);
          })
          .catch((error) => {
            toast.error(error.message);
            setDisable(false);
          });
      } 
      catch (error) {
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
            <option value={"Luminous"}>Luminous</option>
            <option value={"Microtek"}>Microtek</option>
          </select>
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
          <h1>Watt (VA)</h1>
          <input
            type="number"
            placeholder="Enter the watt"
            required
            value={watt}
            onChange={(e) => setWatt(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Warranty</h1>
          <input
            type="number"
            placeholder="Enter the total warranty"
            required
            value={warranty}
            onChange={(e) => setWarranty(e.target.value)}
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
  )
}

export default AddInverter