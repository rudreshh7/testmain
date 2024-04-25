import React from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1o5osVPBs6-wwPRi-5bdQJyr2X7aQHzfI/view?usp=drive_link"; // Replace with your resume URL

  return (
    <div className="regular">
      <nav className="navbar">
        <ul className="navbar-container">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
