import React from "react";
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from "./ui/glowing-stars";
import { FaGraduationCap } from "react-icons/fa";

const Qualification = () => {
  return (
    <div>
      <div>
        <h2
          className="text-2xl sm:text-5xl text-center mt-20 mb-10 font-bold text-white"
          id="education"
        >
          Academic Qualifications
        </h2>
      </div>
      <div className="flex py-20 items-center justify-center antialiased">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Diploma In Civil Engineering</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
            Rangpur Polytechnic Institute, Rangpur, Bangladesh.
          </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center text-white">
            <FaGraduationCap />
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
    </div>
  );
};

export default Qualification;
