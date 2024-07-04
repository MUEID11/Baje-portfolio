"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { FlipWords } from "./ui/flip-words";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MagicButton from "./MagicButton";
// import Image from "next/image";
// import logo from "@/public/mwhitelogo.png";
export function Hero() {
  const words = ["work", "projects", "ideas"];
  return (
    <div>
      <div>
        <HeroHighlight className="px-4 sm:px-8">
          <div className="px-4 max-w-4xl mx-auto ">
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
              Greetings! I&aposm <br />
              <Highlight className="text-black dark:text-white uppercase">
                Md Mehedi Hasan <br />
              </Highlight>
              <div className="text-2xl md:text-3xl mx-auto py-6 font-normal text-neutral-300 leading-snug">
                A Front-end Web Developer <br />
                Explore my
                <FlipWords words={words} /> <br />
                I&aposm excited to share my journey with{" "}
                <span className="text-blue-500 dark:text-blue-500 font-bold">
                  you!
                </span>{" "}
                <br />
                Get in touch
              </div>
              <div>
                <ul className="text-blue-500 text-4xl flex items-center gap-5">
                  <li>
                    <a href="https://www.linkedin.com/in/mehedirangpur">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/MUEID11">
                      <FaGithub />
                    </a>
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
