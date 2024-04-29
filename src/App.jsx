import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import {Toaster} from "react-hot-toast"
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Store = lazy(() => import("./pages/Store"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Router>
      <Toaster />
      <Suspense fallback={<Loader />}>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
