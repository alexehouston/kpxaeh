import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import Home from "../Home/Home";
import Dates from "../Dates/Dates";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import "animate.css";
import "./App.css";

export default function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="animate__animated animate__fadeIn animate__slow">
      <Nav />
      <div className="App">
        <Routes location={location} key={location.pathname}>
          <Route path="/" index element={<Home />} />
          <Route path="/dates" element={<Dates isSmallScreen={isSmallScreen} />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}
