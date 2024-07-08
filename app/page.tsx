import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import Qualification from "@/components/Qualification";
import {Skills} from "@/components/Skills"
import { Meteors } from "@/components/ui/meteors";
import { Toaster } from "react-hot-toast";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-4 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <Skills />
        <Qualification />
        <Projects />
        <Contact />
      </div>
      <Footer />
      <Toaster />
      <Meteors number={30} className="sm:hidden" />
    </main>
  );
}
