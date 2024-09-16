import React from "react";
import Sidebox from "./components/Sidebox.jsx";
import Home from "./components/home/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Work from "./components/work/Work.jsx";
import Contact from "./components/contact/Contact.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Sidebox />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  )
}