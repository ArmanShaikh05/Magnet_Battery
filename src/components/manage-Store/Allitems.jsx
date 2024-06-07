import { useEffect, useReducer, useState } from "react";
import ManageStoreItem from "./ManageStoreItem";
import axios from "axios";
import { useGlobalContextHook } from "../../context/contextHooks";
import SectionLoader from "../SectionLoader";
import ManageInverterItem from "./ManageInverterItem";

const Allitems = () => {
  const [itemData, setItemData] = useState([]);
  const { brand, search } = useGlobalContextHook();
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [brand, search, reducerValue]);

  const fetchData = async () => {
    setLoading(true)
    const response = await axios.get(
      `${
        import.meta.env.VITE_SERVER
      }/api/v1/products/all/combine?search=${search}&brand=${brand}`
    );
    setItemData(response.data);
    setLoading(false)
  };

  return loading ? (
    <SectionLoader />
  ) : itemData ? (
    itemData.map((item) => {

     return item.map((subitem, index) => {
        if('oldBatteryPrice' in subitem) {
          return  (<ManageStoreItem key={index} forceUpdate={forceUpdate} itemData={subitem} />)
        }

        else {
          return ( <ManageInverterItem key={index} forceUpdate={forceUpdate} itemData={subitem} />)
        }
      })

      
})
  ) : (
    <h1>No Items</h1>
  );
};

export default Allitems;
