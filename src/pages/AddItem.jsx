// import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import {  useNavigate } from "react-router-dom";


const AddItem = () => {

  const [name, setName] = useState("");
  const [mrp, setMrp] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [vehicles, setVehicles] = useState("");
  const [oldBatteryPrice, setOldBatteryPrice] = useState("");
  const [brand, setBrand] = useState("Amaron");
  const [itemCode, setItemCode] = useState("");
  const [voltage, setVoltage] = useState("");
  const [amphere, setAmphere] = useState("");
  const [totalWarranty, setTotalWarranty] = useState("");
  const [freeWarranty, setFreeWarranty] = useState("");
  const [proRataWarranty, setProRataWarranty] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();


  const handleNavigate = (e) => {
    e.preventDefault();
    window.scrollTo(0,0)
    navigate("/manage-store");
  };

  const createNewPost = async (e) => {
    e.preventDefault();
    console.log(file)

    // if (title.length === 0) {
    //   toast.error("Title is Required");
    // } else if (summary.length === 0) {
    //   toast.error("Summary is Required");
    // } else if (content.length === 0) {
    //   toast.error("Content is Required");
    // } else if(!file){
    //   toast.error("Please Add an Image")
    // } else {
    //   const data = new FormData();
    //   data.set("title", title);
    //   data.set("summary", summary);
    //   data.set("content", content);
    //   data.set("section", section);
    //   cats.forEach((cat) => {
    //     data.append("category[]", cat);
    //   });
    //   data.set("file", file[0]);


    //   try {

    //     const response = await axios.post(`${process.env.REACT_APP_SERVER}/create`,data);
    //     if (response) {
    //       if(response.data.success === true){
    //         toast.success(response.data.message);
    //         setRedirect(true);
    //       }
    //       else{
    //         toast.error(response.data.message);
    //         setRedirect(false)
    //       }
    //     }
    //   } catch (error) {
    //     console.log(error)
    //   }

    toast.success("Item Added")
     
    }





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
            <option >Amaron</option>
            <option>Exide</option>
            <option>PowerZone</option>
            <option>Luminous</option>
            <option>Microtek</option>
          </select>
        </div>

        <div className="form-row">
          <h1>Box Price</h1>
          <input
            type="number"
            placeholder="Enter the MRP"
            required
            value={mrp}
            onChange={(e)=>setMrp(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Selling Price</h1>
          <input
            type="number"
            placeholder="Enter the selling price"
            required
            value={sellingPrice}
            onChange={(e)=>setSellingPrice(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Compatible vehicles</h1>
          <input
            type="text"
            placeholder="Enter the compatible vehicles"
            required
            value={vehicles}
            onChange={(e)=>setVehicles(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Old Battery Price</h1>
          <input
            type="number"
            placeholder="Enter the old battery price"
            required
            value={oldBatteryPrice}
            onChange={(e)=>setOldBatteryPrice(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Item Code</h1>
          <input
            type="text"
            placeholder="Enter the S.no"
            required
            value={itemCode}
            onChange={(e)=>setItemCode(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Voltage (V)</h1>
          <input
            type="number"
            placeholder="Enter the voltage"
            required
            value={voltage}
            onChange={(e)=>setVoltage(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Amphere (AH)</h1>
          <input
            type="number"
            placeholder="Enter the amphere"
            required
            value={amphere}
            onChange={(e)=>setAmphere(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Total Warranty</h1>
          <input
            type="number"
            placeholder="Enter the total warranty"
            required
            value={totalWarranty}
            onChange={(e)=>setTotalWarranty(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Free Warranty</h1>
          <input
            type="number"
            placeholder="Enter the free waranty"
            required
            value={freeWarranty}
            onChange={(e)=>setFreeWarranty(e.target.value)}
          />
        </div>

        <div className="form-row">
          <h1>Pro-Rata Warranty</h1>
          <input
            type="number"
            placeholder="Enter the pro-rata warranty"
            required
            value={proRataWarranty}
            onChange={(e)=>setProRataWarranty(e.target.value)}
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
          <button className="createBtn btn" onClick={createNewPost} type="submit">
            Create Item
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddItem