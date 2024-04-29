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
              <Route path="twoWheelers" element={<TwoWheelers />} />
              <Route path="threeWheelers" element={<ThreeWheelers />} />
              <Route path="passengerVehicles" element={<PassengerVehicles />} />
              <Route path="heavyVehicles" element={<HeavyVehicles />} />
              <Route path="inverterBattery" element={<InverterBattery />} />
          </Route>
          <Route path="/single-item" element={<SingleItem />} />
        </Routes>
      <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
