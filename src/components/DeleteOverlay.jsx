
import toast from "react-hot-toast";
/* eslint-disable react/prop-types */
const DeleteOverlay = ({ open, setOpen }) => {
  
  const handledelete = async () => {
   toast.success("Deleted")
   setOpen(false);
  };
  const title = "Demo Title"

  if (open) {
    return (
      <div className="overlay-container">
        <div className="overlay-box">
          <div className="overlay-data">
            <h2>Are you sure you want to delete the Item?</h2>
            <h4>Title:- `{title}`</h4>
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
