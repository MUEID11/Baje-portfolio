"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { FlipWords } from "./ui/flip-words";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MagicButton from "./MagicButton";
import { LinkPreview } from "./ui/link-preview";
// import Image from "next/image";
// import logo from "@/public/mwhitelogo.png";
export function Hero() {
  const words = ["work", "projects", "ideas"];
  return (
    <div>
      <div>
        <HeroHighlight className="px-1 sm:px-8">
          <div className="px-2 sm:px-4 max-w-4xl mx-auto ">
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-2xl text-left md:text-4xl lg:text-5xl font-bold text-white leading-snug lg:leading-normal flex-col items-center"
            >
              Greetings! I am <br />
              <Highlight className="text-black dark:text-white uppercase">
                Md Mehedi Hasan <br />
              </Highlight>
              <div className="text-2xl md:text-3xl mx-auto py-6 font-normal text-neutral-300 leading-snug">
                A Front-end Web Developer <br />
                Explore my
                <FlipWords words={words} /> <br />I am excited to share my
                journey with{" "}
                <span className="text-blue-500 dark:text-blue-500 font-bold">
                  you!
                </span>{" "}
                <br />
                Get in touch
              </div>
              <div>
                <ul className="text-blue-500 text-4xl flex items-center gap-5">
                  <li>
                    <LinkPreview
                      url="https://www.linkedin.com/in/mehedirangpur"
                      imageSrc="/LinkPreviewImages/linkdin.png"
                      isStatic
                      className="font-bold text-blue-400"

                    >
                      <FaLinkedin />
                    </LinkPreview>
                  </li>
                  <li>
                    <LinkPreview
                    
                      url="https://github.com/MUEID11"
                      imageSrc="/LinkPreviewImages/github.png"
                      isStatic
                      className="font-bold text-blue-400"

                    >
                      <FaGithub />
                    </LinkPreview>
                  </li>
                </ul>
              </div>
              <MagicButton />
            </motion.h1>
          </div>

          {/* <div>
            <Image src={logo} alt="logo" />
          </div> */}
        </HeroHighlight>
      </div>
    </div>
  );
}
