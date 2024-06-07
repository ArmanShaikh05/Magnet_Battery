// import axios from "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContextHook, useSidebarContextHook } from "../context/contextHooks";

const EditInverter = () => {

  const [disable, setDisable] = useState(false);
  const id = useParams().id;

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

  useEffect(() => {
    fetchData();
  }, [id]);

  const  fetchData = async () => {
    await fetch(`${import.meta.env.VITE_SERVER}/api/v1/products/all/inverter/${id}`).then(
      (response) => {
        response.json().then((itemData) => {
          setName(itemData.name);
          setMrp(itemData.boxPrice);
          setSellingPrice(itemData.sellingPrice);
          setBrand(itemData.brand);
          setItemCode(itemData.itemCode);
          setVoltage(itemData.voltage);
          setWatt(itemData.watt);
          setWarranty(itemData.warranty);
        });
      }
    );
  };

  const handleNavigate = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    setShowSidebar(false)
    navigate(`/manage-store/${path}`);
  };




const updateItem = async (e) => {
    e.preventDefault();
    setDisable(true)

    try {
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

      if (file?.[0]) {
        data.set("file", file?.[0]);
      }

      toast.promise(axios.put(`${import.meta.env.VITE_SERVER}/api/v1/products/edit/inverter/${id}`,data),{
        loading: "Updating Item",
        success: <b>Item Updated</b>,
        error: <b>Item Not Updated</b>
      }).then(()=> {window.scrollTo(0,0);navigate(`/manage-store/${path}`);setDisable(false)}).catch((error)=>{
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
            onClick={updateItem}
            disabled={disable}
            type="submit"
          >
            Update Item
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditInverter