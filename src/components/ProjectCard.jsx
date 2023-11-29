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
                auth: import.meta.env.VITE_REACT_APP_TOKEN 
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
        
        <aside>
            <p>{userProject.description}</p>
            <ul>
                <div className='project-card_languages'>
                    {projectLanguages ? (
                        userProject.topics.map((language) => (
                            <li key={language}>
                                <h4>{language}</h4>
                            </li>
                    ))) : null}
                </div>
            </ul>
        </aside>
        <div className='project-card_links' >
            <a className='project-card_links-site' target='_blanc' href={userProject.homepage}>link to site</a>
            <a className='project-card_links-git' target='_blanc' href={userProject.html_url}>link to GitHub</a>
        </div>
    </article>
  )
}

export default ProjectCard

