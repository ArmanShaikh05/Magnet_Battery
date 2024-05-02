import { useEffect, useState } from "react";
import StoreItem from "./StoreItem";
import axios from "axios"
import { useGlobalContextHook } from "../../context/contextHooks";

const Allitems = () => {

  const [itemData, setItemData] = useState([])
  const {brand,search} = useGlobalContextHook()

  useEffect(()=>{
    fetchData()
  },[brand,search])


  const fetchData = async() => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/products/all?search=${search}&brand=${brand}`)
    setItemData(response.data)
  }

  return (
    itemData ? itemData.map((item,index) => (<StoreItem key={index} itemData={item} />)) : <h1>No Items</h1>
  )
};

export default Allitems;
