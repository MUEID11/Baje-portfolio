import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black-300 text-center text-white w-screen">
      <div className="flex justify-center items-center border-b p-4">
        <div className="hidden lg:block mr-5">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex space-x-4">
          <a target="_blank" href="https://www.facebook.com/md.mehedi.hasan.129121" className="text-gray-100">
            <FaFacebook />
          </a>
          <a target="_blank" href="https://x.com/mehedirangpur3" className="text-gray-100">
            < FaTwitter />
          </a>
          <a target="_blank" href="https://www.instagram.com/mueid11" className="text-gray-100">
            <FaInstagram />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/mehedirangpur" className="text-gray-100">
            <FaLinkedin />
          </a>
          <a target="_blank" href="https://github.com/MUEID11" className="text-gray-100">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="text-center p-4 bg-black-200">
        © {new Date().getFullYear()} All rights reserved: 
        <a className="text-gray-100 font-bold" href="https://github.com/MUEID11/Baje-portfolio">
          {" "}
          Md Mehedi Hasan
        </a>
      </div>
    </footer>
  );
};

export default Footer;
