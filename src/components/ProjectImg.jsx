import React from 'react'

function ProjectImg(props) {
  const repo = props.project
  const imageUrl = `https://HRegniez.github.io/${repo}/screenshot/preview.png`
  return (
    <div className='project_img'>
      <img src={imageUrl} alt="" />
    </div>
  )
}

export default ProjectImg
