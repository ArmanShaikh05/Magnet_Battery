import axios from "axios"
import { useEffect, useState } from "react"
import ManageStoreItem from "./ManageStoreItem"
import { useGlobalContextHook } from "../../context/contextHooks"

const TwoWheelers = () => {
  const [itemData, setItemData] = useState([])
  const {brand,search} = useGlobalContextHook()

  useEffect(()=>{
    fetchData()
  },[brand,search])

  const fetchData = async() => {
    const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/products/all?category=Two&search=${search}&brand=${brand}`)
    setItemData(response.data)
  }

  return (
    itemData ? itemData.map((item,index) => (<ManageStoreItem key={index} itemData={item} />)) : <h1>No Items</h1>
  )
}

export default TwoWheelers