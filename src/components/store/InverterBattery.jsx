import axios from "axios"
import { useEffect, useState } from "react"
import StoreItem from "./StoreItem"

const InverterBattery = () => {
  const [itemData, setItemData] = useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async() => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/products/all?category=Inverter`)
    setItemData(response.data)
  }

  return (
    itemData ? itemData.map((item,index) => (<StoreItem key={index} itemData={item} />)) : <h1>No Items</h1>
  )
}

export default InverterBattery