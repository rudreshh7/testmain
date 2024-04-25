import React from "react";
import "./Hero.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ImBlog } from "react-icons/im";
import { MdKeyboardCommandKey } from "react-icons/md";

const Hero = () => {
  return (
    <div className="regular hero">
      <div>
        <h1 className="hero-name">Rudresh Jha</h1>
        <h2 className="hero-title">&lt;Software Engineer/&gt;</h2>
        <p>
          Full Stack Engineer focused on building products with extra
          <br /> attention to detail Haha.
        </p>

        {/* <p>Key Skills: React, Node.js, JavaScript, Python, SQL</p> */}
        {/* <button className="cta-btn">Download Resume</button> */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/rudreshh7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="linkedin-icon" />
          </a>
          <a
            href="https://github.com/rudreshh7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="github-icon" />
          </a>
          <a
            href="https://leetcode.com/rudreshhhh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode className="leetcode-icon" />
          </a>
          <a
            href="https://rudresh.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImBlog className="blog-icon" />
          </a>
        </div>

        {/*  */}
        <p className="keyboard-nav">Press ⌘+X to navigate with your keyboard</p>
      </div>
    </div>
  );
};

export default Hero;
