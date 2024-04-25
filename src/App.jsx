import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Projects from "./Pages/Projects";
import Popup from "./components/Popup";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key == "x") {
      handleOpen();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>

      <Popup isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default App;
