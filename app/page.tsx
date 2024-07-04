import Contact from "@/components/Contacts";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import Qualification from "@/components/Qualification";
import {Skills} from "@/components/Skills"
import { Toaster } from "react-hot-toast";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-4 px-5">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Qualification />
        <Contact />
      </div>
      <Footer />
      <Toaster />
    </main>
  );
}