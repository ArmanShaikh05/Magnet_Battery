import { useEffect, useState } from "react";
import StoreItem from "./StoreItem";
import axios from "axios"
import { useGlobalContextHook } from "../../context/contextHooks";
import SectionLoader from "../SectionLoader";
import InverterItem from "./InverterItem";

const Allitems = () => {

  const [itemData, setItemData] = useState([])
  const {brand,search} = useGlobalContextHook()
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    fetchData()
  },[brand,search])


  const fetchData = async() => {
    setLoading(true)
    const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/products/all/combine?search=${search}&brand=${brand}`)
    setItemData(response.data)
    setLoading(false)
  }

  

  return (
    loading ? <SectionLoader /> : 
      itemData ? (
        itemData.map((item) => {
         return item.map((subitem, index) => {
            if('oldBatteryPrice' in subitem) {
              return  (<StoreItem key={index}  itemData={subitem} />)
            }
    
            else {
              return ( <InverterItem key={index} itemData={subitem} />)
            }
          })
    
          
    })
      ) : <h1>No Items</h1>
    
  )

};

export default Allitems;
