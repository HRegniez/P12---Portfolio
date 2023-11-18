import React, {useState} from 'react'
import {Octokit} from "octokit"
import '../styles/pages/hero.sass'
import HeroBackground from '../components/HeroBackground'


const Hero = () => {
  const [data, setData] = useState(null)
  const loadData = async () => {
    const octokit = new Octokit({ 
      auth: ``   
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
        <h2>{data.login}</h2>
      </div>
      <div>
        <p>Hello world! <br/> My name is <strong>{data.name}</strong>, <br/> I am a student</p> 
        <h1>Web Developer</h1>
      </div>
      
      <p>here is my bio: {data.bio}</p>
      <HeroBackground/>
    </section>
  ):null;
}

export default Hero
