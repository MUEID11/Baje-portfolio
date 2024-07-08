import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa6";

const MagicButton = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <button className="relative inline-flex text-white items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md ">
           <a 
           href="https://drive.google.com/uc?export=download&id=1jgFsxPmH3gONvswq2SWJVZCJBI2mIION"
           download="your-resume.pdf" className="inline-flex">Download Resume <FaSortDown className="ml-2" /></a>
          </span>
        </button>
    </div>
  );
};

export default MagicButton;
