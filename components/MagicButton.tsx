import React from "react";
import { FaFileDownload } from "react-icons/fa";

const MagicButton = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-6 mr-4">
      <a
        href="https://drive.google.com/drive/u/0/folders/1sxU5GlyWm-wz6OFJ-Dp3G_zMXEt2OxoB"
        download="mdmehedihasanwebdeveloper.pdf"
        className="px-5 py-2.5 relative rounded group font-medium text-white inline-block text-sm"
      >
        <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
        <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
        <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
        <span className="relative flex justify-center items-center">
          Download Resume <FaFileDownload className="ml-2" />
        </span>
      </a>
    </div>
  );
};

export default MagicButton;
