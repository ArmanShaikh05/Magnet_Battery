import axios from "axios"
import { useEffect, useReducer, useState } from "react"
import ManageStoreItem from "./ManageStoreItem"
import { useGlobalContextHook } from "../../context/contextHooks"

const InverterBattery = () => {
  const [itemData, setItemData] = useState([])
  const {brand,search} = useGlobalContextHook()
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0)

  useEffect(()=>{
    fetchData()
  },[brand,search,reducerValue])

  const fetchData = async() => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/products/all?category=Inverter&search=${search}&brand=${brand}`)
    setItemData(response.data)
  }

  return (
    itemData ? itemData.map((item,index) => (<ManageStoreItem key={index} forceUpdate={forceUpdate} itemData={item} />)) : <h1>No Items</h1>
  )
}

export default InverterBattery