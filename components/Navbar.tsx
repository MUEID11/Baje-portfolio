"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconBrowserCheck, IconCurlyLoop, IconHome, IconMail, IconUser } from "@tabler/icons-react";
import { FaGraduationCap } from "react-icons/fa";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconCurlyLoop className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    // {
    //   name: "About",
    //   link: "#about",
    //   icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    // },
    {
      name: "Education",
      link: "#education",
      icon: <FaGraduationCap className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <IconBrowserCheck className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
