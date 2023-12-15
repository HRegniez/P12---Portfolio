import React from 'react'

import iconVite from "../assets/languageLogos/icons8-vite.svg"
import iconWebpack from '../assets/languageLogos/js_webpack-icon.svg'
import iconSass from "../assets/languageLogos/icons8-avatar-sass.svg"
import iconTailwind from '../assets/languageLogos/Tailwind_CSS_Logo.svg'
import iconRedux from "../assets/languageLogos/redux.svg"
import iconGit from '../assets/languageLogos/git-icon.svg'
import iconGithub from "../assets/languageLogos/github-icon-1.svg"
import iconSwagger from '../assets/languageLogos/swagger-seeklogo.com.svg'
import iconThree from '../assets/languageLogos/THREEjs.svg'

function ProfileTechs() {
  return (
    <article className='profile_techs'>
        <h3>Techs I've used</h3>
        <ul>
        <li>
            <div className='profile_techs-icon'>
            <img src={iconVite} alt="" />
            </div>
            <h4>Vite</h4>
        </li>
        <li>
            <div className='profile_techs-icon'>
            <img src={iconWebpack} alt="" />
            </div>
            <h4>Webpack</h4>
        </li>
        <li>
            <div className='profile_techs-icon'>
            <img src={iconSass} alt="" />
            </div>
            <h4>SASS/SCSS</h4>
        </li>
        <li>
            <div className='profile_techs-icon'>
            <img src={iconTailwind} alt="" />
            </div>
            <h4>Tailwind</h4>
        </li>
        <li>
            <div className='profile_techs-icon'>
            <img src={iconRedux} alt="" />
            </div>
            <h4>Redux</h4>
        </li>
        <li>
            <div className='profile_techs-icon'>
            <img src={iconGit} alt="" />
            </div>
            <h4>Git</h4>
        </li>
        <li>
            <div className='profile_techs-icon'>
            <img src={iconGithub} alt="" />
            </div>
            <h4>GitHub</h4>
        </li>
        <li>
            <div className='profile_techs-icon'>
            <img src={iconSwagger} alt="" />
            </div>
            <h4>Swagger</h4>
        </li>
        <li>
            <div className='profile_techs-icon'>
            <img src={iconThree} alt="" />
            </div>
            <h4>THREE js</h4>
        </li>
        </ul>
    </article>
  )
}

export default ProfileTechs
