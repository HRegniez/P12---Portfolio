import React from 'react'
import projects from "../projectData.json"
import ProjectCard from '../components/ProjectCard'
import '../styles/pages/projects.sass'

function Projects() {
  return (
    <section id='projects' className='projects'>
      <div className='projects_contain'>
        <h2>Projects</h2>
        <div className='projects_card-container'>
          {projects.map((project) => (
              <ProjectCard 
                  key={project.id} 
                  title={project.title}
                  imgLink={project.imgLink}
                  description={project.description}
                  siteLink={project.siteLink}
                  githubLink={project.githubLink}
                  techs={project.techs}
                  />
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default Projects

