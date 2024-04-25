import React, { useEffect } from "react";
import "./Popup.css";
const Popup = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".popup-content")) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);
  return (
    <div className={`popup-overlay ${isOpen ? "open" : ""}`}>
      <div className="popup-content">
        <h1>Hello Popup</h1>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
