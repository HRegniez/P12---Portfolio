import React from 'react'
import projects from "../projectData.json"
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <div id='projects'>
      <section>
        <h2>Projects</h2>
        {projects.map((project) => (
            <ProjectCard 
                key={project.id} 
                title={project.title}
                imgLink={project.imgLink}
                description={project.description}
                siteLink={project.siteLink}
                githubLink={project.githubLink}
                />
        ))}
      </section>
    </div>
  )
}

export default Projects

