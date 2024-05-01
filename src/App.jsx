import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import {Toaster} from "react-hot-toast"
import Loader from "./components/Loader";


const HomePage = lazy(() => import("./pages/HomePage"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Store = lazy(() => import("./pages/Store"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const TwoWheelers = lazy(()=>import("./components/store/TwoWheelers"))
const ThreeWheelers = lazy(()=>import("./components/store/ThreeWheelers"))
const PassengerVehicles = lazy(()=>import("./components/store/Passengervehicles"))
const HeavyVehicles = lazy(()=>import("./components/store/HeavyVehicles"))
const InverterBattery = lazy(()=>import("./components/store/InverterBattery"))
const Allitems = lazy(()=>import("./components/store/Allitems"))
const SingleItem = lazy(()=>import("./pages/SingleItem"))
const ManageStore = lazy(()=>import("./pages/ManageStore"))
const AddItem = lazy(()=>import("./pages/AddItem"))
const EditItem = lazy(()=>import("./pages/EditItem"))


// manage store item imports
const ManageTwoWheelers = lazy(()=>import("./components/manage-Store/TwoWheelers"))
const ManageThreeWheelers = lazy(()=>import("./components/manage-Store/ThreeWheelers"))
const ManagePassengerVehicles = lazy(()=>import("./components/manage-Store/Passengervehicles"))
const ManageHeavyVehicles = lazy(()=>import("./components/manage-Store/HeavyVehicles"))
const ManageInverterBattery = lazy(()=>import("./components/manage-Store/InverterBattery"))
const ManageAllitems = lazy(()=>import("./components/manage-Store/Allitems"))

function App() {
  return (
    <Router>
      <Toaster />
      <Suspense fallback={<Loader />}>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />


          <Route path="/store" element={<Store />} >
              <Route path="" element={<Allitems />} />
              <Route path="/store/*" element={<Allitems />} />
              <Route path="twoWheelers" element={<TwoWheelers />} />
              <Route path="threeWheelers" element={<ThreeWheelers />} />
              <Route path="passengerVehicles" element={<PassengerVehicles />} />
              <Route path="heavyVehicles" element={<HeavyVehicles />} />
              <Route path="inverterBattery" element={<InverterBattery />} />
          </Route>

          
          <Route path="/item/:id" element={<SingleItem />} />


          <Route path="/manage-store" element={<ManageStore />} > 
              <Route path="" element={<ManageAllitems />} />
              <Route path="/manage-store/*" element={<ManageAllitems />} />
              <Route path="twoWheelers" element={<ManageTwoWheelers />} />
              <Route path="threeWheelers" element={<ManageThreeWheelers />} />
              <Route path="passengerVehicles" element={<ManagePassengerVehicles />} />Manage
              <Route path="heavyVehicles" element={<ManageHeavyVehicles />} />
              <Route path="inverterBattery" element={<ManageInverterBattery />} />
          </Route>

          <Route path="/add" element={<AddItem />} />

          <Route path="/edit/:id" element={<EditItem />} />

        </Routes>
      <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
