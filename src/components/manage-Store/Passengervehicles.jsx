import axios from "axios"
import { useEffect, useState } from "react"
import ManageStoreItem from "./ManageStoreItem"

const Passengervehicles = () => {
  const [itemData, setItemData] = useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async() => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/products/all?category=Passenger`)
    setItemData(response.data)
  }

  return (
    itemData ? itemData.map((item,index) => (<ManageStoreItem key={index} itemData={item} />)) : <h1>No Items</h1>
  )
}

export default Passengervehicles