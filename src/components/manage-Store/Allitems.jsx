import { useEffect, useState } from "react";
import ManageStoreItem from "./ManageStoreItem";
import axios from "axios";

const Allitems = () => {
  const [itemData, setItemData] = useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async() => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/products/all`)
    setItemData(response.data)
  }

  return (
    itemData ? itemData.map((item,index) => (<ManageStoreItem key={index} itemData={item} />)) : <h1>No Items</h1>
  )
};

export default Allitems;
