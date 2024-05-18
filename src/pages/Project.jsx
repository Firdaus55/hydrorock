import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Project/Hero";
import Projects from "../components/Project/Projects";
import { projects } from "../constants/projects";
import Footer from "../components/Footer/Footer";

console.log(projects);

const Project = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects projects={projects} />
      <Footer></Footer>
    </div>
  );
};

export default Project;
