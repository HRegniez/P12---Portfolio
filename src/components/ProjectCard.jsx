import React, {useState} from 'react'
import '../styles/pages/projects.sass'

function ProjectCard({id, title, imgLink, description, siteLink, githubLink, techs}) {
  const [descriptionToggle, setDescritpionToggle] = useState(false)
  return (
    <div className='projects_card-contain'>
      <article className='projects_card' onMouseEnter={() => setDescritpionToggle(true)} onMouseLeave={() => setDescritpionToggle(false)}>
        <a className='projects_card-link' target="_blanc" href={siteLink}>
              <img src={imgLink} alt="" />  
        </a> 

        <div className={`projects_card-description ${descriptionToggle ? null : "closed"}`}>   
          <i onClick={() => setDescritpionToggle(!descriptionToggle)}  className={`fa-solid fa-chevron-up projects_card-arrow ${descriptionToggle ? "down" : null}`}></i>  
          <h3>{title}</h3>
          <p>{description}</p>               
        </div>
        
      </article> 

      <a className="projects_card-github" target="_blanc" href={githubLink}>
        <i className="fa-brands fa-github"></i> Code
      </a>
      <div className='projects_card-techs'>
        {
          techs.map((tech) => (
            <span key={tech}>{tech}</span>
          ))
        }
      </div>     
    </div>

    
  )
}

export default ProjectCard
