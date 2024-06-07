import warehouse from "../assets/warehouse.svg";
import twoWheeler from "../assets/twoWheeler.svg";
import threeWheeler from "../assets/threeWheeler.svg";
import heavyVehicle from "../assets/heavyVehicle.svg";
import passengerVehicle from "../assets/PassengerVehicle.svg";
import inverterBattery from "../assets/inverterBattery.svg";
import inverter from "../assets/inverterUps.svg";
import searchIcon from "../assets/searchIcon.svg";
import { Outlet, useNavigate } from "react-router-dom";
import {
  useGlobalContextHook,
  useSidebarContextHook,
} from "../context/contextHooks";
import { useEffect, useState } from "react";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Store = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const { setShowSidebar } = useSidebarContextHook();
  const { setBrand, setSearch, brand, setPath, path } = useGlobalContextHook();

  useEffect(() => {
    if (path === "") {
      document.getElementById("allitems").setAttribute("checked", "true");
    } else if (path === "twoWheelers") {
      document.getElementById("twowheeler").setAttribute("checked", "true");
    } else if (path === "threeWheelers") {
      document.getElementById("threeWheeler").setAttribute("checked", "true");
    } else if (path === "heavyVehicles") {
      document.getElementById("heavyVehicle").setAttribute("checked", "true");
    } else if (path === "passengerVehicles") {
      document.getElementById("passengerVehicle").setAttribute("checked", "true");
    } else if (path === "inverterBattery") {
      document.getElementById("inverterBattery").setAttribute("checked", "true");
    }else if (path === "inverter") {
      document.getElementById("inverter").setAttribute("checked", "true");
    }
  }, [path]);

  var settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 660,
        settings: {
            dots:true,
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 540,
        settings: {
            dots:true,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 370,
        settings: {
            dots:true,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  };

  return (
    <div className="store-page">
      <div className="services store">
        <div className="container">
          <h1 className="underlined-text">Looking For</h1>
          <Slider {...settings} className="store-container service-box-container ">

            <div>
              <input
                type="radio"
                className="radio-btns"
                name="storeItemCategory"
                id="allitems"
              />
              <label
                htmlFor="allitems"
                onClick={() => {
                  setShowSidebar(false);
                  setPath("");
                  navigate("/store/");
                }}
                className="service-box store-cat"
              >
                <img src={warehouse} alt="" />
                <p>All Items</p>
              </label>
            </div>

            <div>
              <input
                type="radio"
                className="radio-btns"
                name="storeItemCategory"
                id="twowheeler"
              />
              <label
                htmlFor="twowheeler"
                onClick={() => {
                  setShowSidebar(false);
                  setPath("twoWheelers");
                  navigate("twoWheelers");
                }}
                className="service-box store-cat"
              >
                <img src={twoWheeler} alt="" />
                <p>Two Wheelers</p>
              </label>
            </div>

            <div>
              <input
                type="radio"
                className="radio-btns"
                name="storeItemCategory"
                id="threeWheeler"
              />
              <label
                htmlFor="threeWheeler"
                onClick={() => {
                  setShowSidebar(false);
                  setPath("threeWheelers");
                  navigate("threeWheelers");
                }}
                className="service-box store-cat"
              >
                <img src={threeWheeler} alt="" />
                <p>Three Wheelers</p>
              </label>
            </div>

            <div>
              <input
                type="radio"
                name="storeItemCategory"
                id="passengerVehicle"
                className="radio-btns"
              />
              <label
                htmlFor="passengerVehicle"
                onClick={() => {
                  setShowSidebar(false);
                  setPath("passengerVehicles");
                  navigate("passengerVehicles");
                }}
                className="service-box store-cat"
              >
                <img src={passengerVehicle} alt="" />
                <p>Passenger Vehicles</p>
              </label>
            </div>

            <div>
              <input
                type="radio"
                className="radio-btns"
                name="storeItemCategory"
                id="heavyVehicle"
              />
              <label
                htmlFor="heavyVehicle"
                onClick={() => {
                  setShowSidebar(false);
                  setPath("heavyVehicles");
                  navigate("heavyVehicles");
                }}
                className="service-box store-cat"
              >
                <img src={heavyVehicle} alt="" />
                <p>Heavy Vehicles</p>
              </label>
            </div>

            <div>
              <input
                type="radio"
                className="radio-btns"
                name="storeItemCategory"
                id="inverterBattery"
              />
              <label
                htmlFor="inverterBattery"
                onClick={() => {
                  setShowSidebar(false);
                  setPath("inverterBattery");
                  navigate("inverterBattery");
                }}
                className="service-box store-cat"
              >
                <img src={inverterBattery} alt="" />
                <p>Inverter Battery</p>
              </label>
            </div>

            <div>
              <input
                type="radio"
                className="radio-btns"
                name="storeItemCategory"
                id="inverter"
              />
              <label
                htmlFor="inverter"
                onClick={() => {
                  setShowSidebar(false);
                  setPath("inverter");
                  navigate("inverter");
                }}
                className="service-box store-cat"
              >
                <img src={inverter} alt="" />
                <p>Inverter UPS</p>
              </label>
            </div>

           


          </Slider>
        </div>
      </div>
      
      <div className="filter-container">
        <div className="container">
          <div className="search-area">
            <input
              type="search"
              name="search"
              placeholder="search by name, vehicle"
              onChange={(e) => {
                e.preventDefault();
                setSearchData(e.target.value);
              }}
            />
            <div
              className="search-icon"
              onClick={() => {
                setBrand("");
                setSearch(searchData);
              }}
            >
              <img src={searchIcon} alt="searchicon" />
            </div>
          </div>

          <div className="filter-area">
            <label>Choose Brand</label>
            <select
              name="brands"
              value={brand}
              onChange={(e) => {
                setSearch("");
                setBrand(e.target.value);
              }}
            >
              <option value="">All</option>
              <option value="Amaron">Amaron</option>
              <option value="Exide">Exide</option>
              <option value="PowerZone">PowerZone</option>
              <option value="Luminous">Luminous</option>
              <option value="Okaya">Okaya</option>
              <option value="SFsonic">SFsonic</option>
              <option value="Microtek">Microtek</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container store-item-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Store;
