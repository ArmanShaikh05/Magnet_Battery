import axios from "axios"
import { useEffect, useReducer, useState } from "react"
import ManageStoreItem from "./ManageStoreItem"
import { useGlobalContextHook } from "../../context/contextHooks"
import SectionLoader from "../SectionLoader"

const HeavyVehicles = () => {
  const [itemData, setItemData] = useState([])
  const {brand,search} = useGlobalContextHook()
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    fetchData()
  },[brand,search,reducerValue])

  const fetchData = async() => {
    setLoading(true)
    const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/products/all?category=Heavy&search=${search}&brand=${brand}`)
    setItemData(response.data)
    setLoading(false)
  }

  return (
    loading ? <SectionLoader /> : itemData ? itemData.map((item,index) => (<ManageStoreItem key={index} forceUpdate={forceUpdate} itemData={item} />)) : <h1>No Items</h1>
  )
}

export default HeavyVehicles