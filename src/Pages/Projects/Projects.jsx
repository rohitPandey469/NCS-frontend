import React from "react";
import "./Projects.css";
import {projects} from '../../../data/projects.json'
import Header from "../../Components/Header/Header";
import Project from "../../Components/Cards/Project";
import Footer from "../../Components/Footer/Footer"

const projectList = projects.map((project) => {
  return (
    <Project key={project.name} name={project.name} desc={project.desc[0]}></Project>
  )
})

const Projects = () => {
  return (
  <>
    <Header/>
    <main>
      {projectList}
    </main>
    <Footer/>
  </>
  );
};

export default Projects;
