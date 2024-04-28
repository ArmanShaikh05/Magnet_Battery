import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const HomePage2 = lazy(() => import("./pages/HomePage"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage2 />} />
        </Routes>
      <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
