
import toast from "react-hot-toast";
import axios from "axios"


/* eslint-disable react/prop-types */
const DeleteOverlay = ({ open, setOpen, id, name, forceUpdate, type }) => {
  
  const handledelete = async () => {
   if(type === "Battery"){
    toast.promise(axios.delete(`${import.meta.env.VITE_SERVER}/api/v1/products/delete/${id}`),{
      loading:"Deleting Item",
      success:()=>{
        forceUpdate()
        return <b>Item Deleted</b>
      },
      error:()=>{
        forceUpdate()
        return <b>Item Not Deleted</b>
      }
     })
   } else if(type === "Inverter"){
    toast.promise(axios.delete(`${import.meta.env.VITE_SERVER}/api/v1/products/delete/inverter/${id}`),{
      loading:"Deleting Item",
      success:()=>{
        forceUpdate()
        return <b>Item Deleted</b>
      },
      error:()=>{
        forceUpdate()
        return <b>Item Not Deleted</b>
      }
     })
   }
   
   setOpen(false);
  };

  if (open) {
    return (
      <div className="overlay-container">
        <div className="overlay-box">
          <div className="overlay-data">
            <h2>Are you sure you want to delete the Item?</h2>
            <h4>Name:- `{name}`</h4>
          </div>
          <div className="overlay-buttons">
            <button
              className="cancelBtn btn"
              type="button"
              onClick={() => {
                setOpen(false);
              }}
            >
              Cancel
            </button>
            <button className="deleteBtn btn" type="submit" onClick={handledelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default DeleteOverlay;
