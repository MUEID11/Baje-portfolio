import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";
import { IconSignature } from "@tabler/icons-react";

export function Projects() {
  const items = [
    {
      title: "The Scholar's Pathway",
      description: (
        <a
          href="https://github.com/MUEID11/Scholars-Pathway.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub Repository
        </a>
      ),
      liveLink: "https://b9-assignment11.web.app",
      header: (
        <Image
          src="/Projects/Screenshot 2024-07-04 120203.png"
          alt="Project Image 2"
          width={1000}
          height={300}
          className="bg-cover bg-center overflow-auto rounded-md"
        />
      ),
      className: "md:col-span-3",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art Revolution",
      description: (
        <a
          href="https://github.com/MUEID11/Craftify-Client.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub Repository
        </a>
      ),
      liveLink: "https://b9-assignment10.firebaseapp.com",
      header: (
        <Image
          src="/Projects/Screenshot 2024-07-04 121614.png"
          alt="Project Image 2"
          width={500}
          height={300}
          className="bg-cover bg-center overflow-auto rounded-md"
        />
      ),
      className: "md:col-span-2",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "InBrief, a web-base news aggregator(Team Project)",
      description: (
        <a
          href="https://github.com/MUEID11/InBrief.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub Repository
        </a>
      ),
      liveLink: "https://inbrief-3d9ce.web.app/",
      header: (
        <Image
          src="https://res.cloudinary.com/ddaa3wb4w/image/upload/v1730557216/Screenshot_2024-11-02_201738_a3rjo7.png"
          alt="Project Image 2"
          width={500}
          height={300}
          className="bg-cover bg-center overflow-auto rounded-md"
        />
      ),
      className: "md:col-span-2",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Digital Revolution of teaching services",
      description: (
        <a
          href="https://github.com/MUEID11/Mastaar-Booking-Services.git"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub Repository
        </a>
      ),
      liveLink: "https://b9-assignment11-client.web.app",
      header: (
        <Image
          src="/Projects/Screenshot 2024-07-04 115547.png"
          alt="Project Image 2"
          width={1000}
          height={300}
          className="bg-cover bg-center overflow-auto rounded-md"
        />
      ),
      className: "md:col-span-3",
      icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    // Other items omitted for brevity
  ];

  return (
    <div>
      <div>
        <h2
          className="text-2xl sm:text-5xl text-center mt-20 mb-10 font-bold text-white"
          id="projects"
        >
          My Projects
        </h2>
      </div>
      <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[22rem] sm:p-14 p-2">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={
              <>
                {item.description}
                <a
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline block mt-2"
                >
                  Live Link
                </a>
              </>
            }
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
