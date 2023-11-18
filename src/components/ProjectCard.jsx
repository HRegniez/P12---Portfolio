import React, {useState} from 'react'
import { Octokit } from 'octokit'
import ProjectImg from './ProjectImg'
import '../styles/components/projectCard.sass'

function ProjectCard(props) {
    const userProject = props.projectData
    const [projectLanguages, setProjectLanguages] = useState()
    const loadData = async () => {
        if(userProject.name){
            const octokit = new Octokit({ 
            auth: ``   
            });
            try {
                const response = await octokit.request(`GET /repos/HRegniez/${userProject.name}/languages`, {
                username: 'HRegniez',
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            })
            if (response.status === 200) {
                if(!projectLanguages) {
                const languages = await response
                setProjectLanguages(languages.data)   
                }
            }
            } catch (error) {
            console.error('API request failed:', error)
            }    
        }
        
    }
    if(!projectLanguages){
        
        loadData()
    }
  return (
    <article className='project-card'>
        <div className='project-card_title'>
            <h3>{userProject.name}</h3>
        </div>
        {userProject.name ? (
            <ProjectImg project={userProject.name}/>
        ): null}
        
        <p>{userProject.description}</p>

        <ul>
            <h4>Languages</h4>
            <div className='project-card_languages'>
                {projectLanguages ? (
                    Object.entries(projectLanguages).map(([language, bytes]) => (
                        <li key={language}>
                            <h5>{language}</h5>
                        </li>
                ))) : null}
            </div>
            
        </ul>
        <div className='project-card_links' >
            <a className='project-card_links-site' href={userProject.homepage}>link to site</a>
            <a className='project-card_links-git' href={userProject.html_url}>link to GitHub</a>
        </div>
    </article>
  )
}

export default ProjectCard

