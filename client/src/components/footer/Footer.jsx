import React from "react";
import PropTypes from "prop-types"; // ✨ Importing PropTypes
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ({ madeBy }) => {
  return (
    <>
      <footer className="bg-red-900 text-white h-12 px-4 md:px-12 text-center flex flex-row items-center justify-between">
        <p className="font-semibold text-sm md:text-base">Made by {madeBy}</p>
        <div className="flex flex-row text-lg md:text-2xl gap-3 md:gap-5">
          <a href={""} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        
          <a href={""} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        
          <a href={"/"} target="_blank" rel="noopener noreferrer">
            <FaGooglePlusG />
          </a>
          <a href={"https://www.instagram.com/"} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </footer>
    </>
  );
};

// ✨ PropTypes added here
Footer.propTypes = {
  madeBy: PropTypes.string, // Ensures madeBy is a string, default is "Deepak"
};

Footer.defaultProps = {
  madeBy: "CropConnect", // Default value for madeBy
};

export default Footer;
