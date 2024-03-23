import React, {useEffect, useState} from 'react'
// import projects from "../projectData.json"
import ProjectCard from '../components/ProjectCard'
import '../styles/pages/projects.sass'


function Projects() {
  const [projects, setProjects] = useState(null)

  useEffect(() =>{
    const fetchProjects = async () => {
      const response = await fetch('http://localhost:4000/api/projects')
      const json = await response.json()

      if(response.ok) {
        setProjects(json)
      }
    }

    fetchProjects()
  }, [])

  return (
    <section id='projects' className='projects'>
      <div className='projects_contain'>
        <h2>Projects</h2>
        <div className='projects_card-container'>
          {projects && projects.map((project) => (
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

