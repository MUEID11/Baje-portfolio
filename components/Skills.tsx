import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import {
  IconHtml,
  IconBrandMongodb,
  IconKey,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandFirebase,
  IconBrandGithub,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandNextjs,
  IconBrandRedux,
} from "@tabler/icons-react";

export function Skills() {
  const icons = [
    <IconHtml key={1} size={48} strokeWidth={2} />,
    <IconBrandCss3 key={2} size={48} strokeWidth={2} />,
    <IconBrandTailwind key={4} size={48} strokeWidth={2} />,
    <IconBrandJavascript key={3} size={48} strokeWidth={2} />,
    <IconBrandReact key={5} size={48} strokeWidth={2} />,
    <IconBrandNodejs key={6} size={48} strokeWidth={2} />,
    <IconBrandMongodb key={7} size={48} strokeWidth={2} />,
    <IconKey key={8} size={48} strokeWidth={2} />,
    <IconBrandFirebase key={9} size={48} strokeWidth={2} />,
    <IconBrandGithub key={12} size={48} strokeWidth={2} />,
    // <IconBrandNextjs key={12} size={48} strokeWidth={2} />,
    // <IconBrandRedux key={12} size={48} strokeWidth={2} />,
  ];

  return (
    <div>
      <div>
        <h2 className="text-2xl sm:text-5xl text-center mt-20 mb-10 font-bold" id='skills'>
          My Skills
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto w-full p-16">
        {icons.map((icon, index) => (
          <WobbleCard
            key={index}
            containerClassName=""
            className="w-full h-full"
          >
            <div className="flex items-center justify-center">
              {icon}
            </div>
          </WobbleCard>
        ))}
      </div>
    </div>
  );
}
