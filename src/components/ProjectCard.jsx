import React from 'react'

function ProjectCard({id, title, imgLink, description, siteLink, githubLink}) {
  return (
    <article>
       <a href={siteLink}>
            <h3>{title}</h3>
            <img src={imgLink} alt="" />
            <div>
                <p>{description}</p>
                
            </div>
        </a> 
        <a href={githubLink}>
            gitub
        </a>
    </article>
    
  )
}

export default ProjectCard
