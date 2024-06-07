import axios from "axios"
import { useEffect, useState } from "react"
import { useGlobalContextHook } from "../../context/contextHooks"
import SectionLoader from "../SectionLoader"
import InverterItem from "./InverterItem"

const Inverter = () => {
  const [itemData, setItemData] = useState([])
  const {brand,search} = useGlobalContextHook()
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    fetchData()
  },[brand,search])

  const fetchData = async() => {
    setLoading(true)
    const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/products/all/inverter?category=Inverter&search=${search}&brand=${brand}`)
    setItemData(response.data)
    setLoading(false)
  }

  return (
    loading ? <SectionLoader /> : 
      itemData ? itemData.map((item,index) => (<InverterItem key={index} itemData={item} />)) : <h1>No Items</h1>
    
  )
}

export default Inverter