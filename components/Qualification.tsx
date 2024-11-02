import React from "react";
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from "./ui/glowing-stars";
import { FaGraduationCap } from "react-icons/fa";

const Qualification = () => {
  return (
    <div>
      <div>
        <h2
          className="text-2xl sm:text-5xl text-center sm:mt-20 mt-12 sm:mb-10 mb-4 font-bold text-white"
          id="education"
        >
          Academic Qualifications
        </h2>
      </div>
      <div className="flex items-center justify-center antialiased sm:my-16 my-6">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Diploma In Civil Engineering</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
            Rangpur Polytechnic Institute, Rangpur, Bangladesh.
          </GlowingStarsDescription>
          <div className="size-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center text-white p-2">
            <FaGraduationCap/>
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
    </div>
  );
};

export default Qualification;
