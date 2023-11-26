import React, {useState} from 'react'
import {Octokit} from "octokit"
import '../styles/pages/hero.sass'

const Hero = () => {
  const [data, setData] = useState(null)
  const loadData = async () => {
    const octokit = new Octokit({ 
      auth: import.meta.env.VITE_REACT_APP_TOKEN 
    });
    try {
      const response = await octokit.request('GET /user', {
      username: 'HRegniez',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    })
      if (response.status === 200) {
        if(!data) {
          const userData = await response
          setData(userData.data)   
        }
      }
    } catch (error) {
      console.error('API request failed:', error)
    }
  }
  if(!data){
    loadData()
  }
  
  
  return data?(
    <section className='hero'>
      
      <div className='hero_userName'>
        {/* <h2>HR</h2> */}
      </div>
      <div className='hero_intro'>
        <p>Hello world !</p>
        <p className='hero_name'>I am <strong>{data.name}</strong>,</p>
        <p>I am a</p>
      </div>
      
        <h1 className='hero_title'>Web Developer</h1>
      
      <a href='https://github.com/HRegniez' target='_blanc' className='hero_github'>
        <i className="fa-brands fa-github"></i>
        <p>GitHub</p>
      </a>

      <i className="fa-brands logo fa-react hero_react"></i>
      <i className="fa-brands logo fa-square-js hero_js"></i>
      <i className="fa-brands logo fa-css3-alt hero_css"></i>
      <i className="fa-brands logo fa-html5 hero_html"></i>
      <i className="fa-brands logo fa-sass hero_sass"></i>

    </section>
  ):null;
}

export default Hero
