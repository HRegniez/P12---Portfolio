import React, {useState, useEffect} from 'react'
import {Octokit} from "octokit"
import '../styles/pages/hero.sass'


const Hero = () => {
  const [data, setData] = useState(null)
  const [scrollPos, setScrollPos] = useState(0)
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
  const handleScroll = () => {
    setScrollPos(window.scrollY)
    console.log(scrollPos)
  }
  
  useEffect(() =>{
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  
  return data?(
    <section className='hero'>
      
      <div className='hero_userName'>
        {/* <h2>HR</h2> */}
      </div>
      <h1 className='hero_title'>Web Developer</h1>
      <div className='hero_intro'>
        <p>Hello world !</p>
        <h2 className='hero_name'>I am <strong>{data.name}</strong>,</h2>
        <p>I am a</p>
      </div>
      
        
      
      <a href='https://github.com/HRegniez' target='_blanc' className='hero_github'>
        <i className="fa-brands fa-github"></i>
        <p>GitHub</p>
      </a>

      <i className="fa-brands logo fa-react hero_react" style={{ transform: `translateY(${scrollPos * 0.2}px)`}}></i>
      <i className="fa-brands logo fa-square-js hero_js" style={{ transform: `translateY(${scrollPos * 0.3}px)`}}></i>
      <i className="fa-brands logo fa-css3-alt hero_css" style={{ transform: `translateY(${scrollPos * 0.8}px)`}}></i>
      <i className="fa-brands logo fa-html5 hero_html" style={{ transform: `translateY(${scrollPos * 0.7}px)`}}></i>
      <i className="fa-brands logo fa-sass hero_sass" style={{ transform: `translateY(${scrollPos * 0.4}px)`}}></i>

    </section>
  ):null;
}

export default Hero
