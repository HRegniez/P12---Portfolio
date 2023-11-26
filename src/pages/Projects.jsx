import React, {useState} from 'react'
import {Octokit} from "octokit"
import ProjectCard from '../components/ProjectCard'
import '../styles/pages/projects.sass'

const Projects = () => {
  const [userProjects, setUserProjects] = useState(null)
  const loadData = async () => {
    const octokit = new Octokit({ 
      auth: import.meta.env.VITE_REACT_APP_TOKEN   
    });
    try {
      const response = await octokit.request('GET /users/HRegniez/repos', {
      username: 'HRegniez',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
      if (response.status === 200) {
        if(!userProjects) {
          const userData = await response
          setUserProjects(userData.data)   
        }
      }
    } catch (error) {
      console.error('API request failed:', error)
    }
  }
  if(!userProjects){
    loadData()
  }

  return (
    <section id='projects' className='projects'>
      <h2 className='projects_title'>Projects</h2>
      <div className='projects_contain flex-desktop'>
        {userProjects ? (
            userProjects.map((userProject) => (
              userProject.description ? (
                <ProjectCard key={userProject.name} projectData={userProject}/>
                
              ): null
              
          ))) : null
        }
      </div>
      
    </section>
  )
}

export default Projects
