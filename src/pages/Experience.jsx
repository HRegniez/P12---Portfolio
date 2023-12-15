import React from 'react'
import '../styles/pages/experience.sass' 
import ProfileBio from '../components/ProfileBio'
import ProfileServices from '../components/ProfileServices'
import ProfileLanguages from '../components/ProfileLanguages'
import ProfileBackground from '../components/ProfileBackground'

import ProfileTechs from '../components/ProfileTechs'

const Experience = () => {
  return (
    <section id='profile' className='profile_wrapper'>
      <div className='profile'>
        <h2 className='profile_title'>
          Profile
        </h2>
        <ProfileBio />
        <ProfileServices />
        <div className='flex-desktop'>
          <ProfileLanguages/>
          <ProfileBackground/>
        </div>
        <ProfileTechs/>
      </div>
    </section>
  )
}

export default Experience
